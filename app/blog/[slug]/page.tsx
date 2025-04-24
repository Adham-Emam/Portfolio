import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { NotionRenderer } from '@notion-render/client'

import Post from '@/components/post'
import { getPostBySlug, getPostContent, notionClient } from '@/lib/notion'

export const revalidate = 60 // Revalidate every 60 seconds

type PageProps = {
  params: Promise<{ slug: string }>
}

export async function generateMetadata({
  params,
}: PageProps): Promise<Metadata> {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  return {
    title: (post.properties.Title as any).title[0].plain_text,
    description: (post.properties.Excerpt as any).rich_text[0].plain_text,
    openGraph: {
      title: (post.properties.Title as any).title[0].plain_text,
      description: (post.properties.Excerpt as any).rich_text[0].plain_text,
      images: (post.cover as any).external.url
        ? [{ url: (post.cover as any).external.url }]
        : undefined,
    },
  }
}

export default async function BlogPostPage({ params }: PageProps) {
  const { slug } = await params
  const post = await getPostBySlug(slug)

  if (!post) {
    notFound()
  }

  const content = await getPostContent(post.id)

  const notionRenderer = new NotionRenderer({
    client: notionClient,
  })

  const html = await notionRenderer.render(...content)

  return (
    <Post
      title={(post.properties.Title as any).title[0].plain_text}
      category={(post.properties.Category as any).select.name}
      excerpt={(post.properties.Excerpt as any).rich_text[0].plain_text}
      date={post.created_time}
      readingTime={(post.properties.ReadingTime as any).number}
      bannerImage={(post.cover as any).external.url}
      content={html}
    />
  )
}
