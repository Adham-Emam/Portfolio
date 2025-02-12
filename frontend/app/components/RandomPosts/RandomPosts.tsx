import React from "react";
import Image from "next/image";
import Link from "next/link";
import { generateSlug, FormatDate } from "@/app/utils";

import styles from "./RandomPosts.module.css";

interface Post {
  id: number;
  title: string;
  body: string;
  img_url: string;
  published_date: string;
}

const RandomPosts = async ({ blogId }: { blogId: number }) => {
  const data = await fetch(
    "http://127.0.0.1:8000/blogs/random_posts/?blog_id=" + blogId
  );
  const posts = await data.json();

  return (
    <>
      <h2 className="section-title">Read More Posts</h2>
      <div className={styles.container}>
        {posts.map((post: Post) => {
          return (
            <div key={post.id} className={styles.post}>
              <Image
                src={post.img_url}
                className={styles.image}
                alt={post.title}
                width={250}
                height={175}
              />
              <div className={styles.content}>
                <span>{FormatDate(post.published_date)}</span>
                <Link href={`/blog/${post.id}?t=${generateSlug(post.title)}`}>
                  <h3>{post.title}</h3>
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
};

export default RandomPosts;
