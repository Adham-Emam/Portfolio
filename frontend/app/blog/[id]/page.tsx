import React from "react";

import { BlogDetails, RandomPosts } from "@/app/components";

const unslugify = (slug: string): string => {
  return slug
    .replace(/-/g, " ") // Replace hyphens with spaces
    .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize first letter of each word
};

interface SearchParams {
  t: string;
}

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}) {
  const blogTitle = decodeURIComponent(searchParams.t); // Decode URL encoding

  return {
    title: `${unslugify(blogTitle)} | Adham Emam`, // Dynamic Title
    description: `Read the blog post "${unslugify(
      blogTitle
    )}" and explore insights into web development projects using React, Next.js, Django, and more.`,
    keywords: `blog, ${unslugify(
      blogTitle
    )}, web development, React, Next.js, Django, portfolio`,
  };
}

export default async function BlogPost({ params }: { params: { id: string } }) {
  const id = params.id;

  return (
    <div className="container">
      <BlogDetails blogId={Number(id)} />
      <RandomPosts blogId={Number(id)} />
    </div>
  );
}
