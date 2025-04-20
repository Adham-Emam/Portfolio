import 'server-only'

import { Client } from '@notionhq/client'
import {
  BlockObjectResponse,
  PageObjectResponse,
} from '@notionhq/client/build/src/api-endpoints'
import { cache } from 'react'

export const notionClient = new Client({
  auth: process.env.NOTION_TOKEN,
})

export const getPosts = cache(() => {
  return notionClient.databases
    .query({
      database_id: process.env.DATABASE_ID!,
      filter: {
        property: 'Status',
        status: {
          equals: 'Published',
        },
      },
      // sorts: [
      //   {
      //     property: 'Date',
      //     direction: 'descending',
      //   },
      // ],
    })
    .then((res) => res.results as PageObjectResponse[])
})
export const getPostContent = cache((pageId: string) => {
  return notionClient.blocks.children
    .list({ block_id: pageId })
    .then((res) => res.results as BlockObjectResponse[])
})

export const getPostBySlug = cache((slug: string) => {
  return notionClient.databases
    .query({
      database_id: process.env.DATABASE_ID!,
      filter: {
        property: 'Slug',
        rich_text: {
          equals: slug,
        },
      },
    })
    .then((res) => res.results[0] as PageObjectResponse | undefined)
})
