import React from "react";
import Image from "next/image";
import { FormatDate } from "../../utils";

import styles from "./BlogDetails.module.css";

const BlogDetails = async ({ blogId }: { blogId: number }) => {
  const data = await fetch("http://127.0.0.1:8000/blogs/posts/" + blogId);
  const post = await data.json();

  if (!post) {
    return <div className={styles.error}>Blog post not found</div>;
  }

  return (
    <div className={styles.container}>
      <span className={styles.date}>{FormatDate(post.published_date)}</span>
      <Image
        src={post.img_url}
        className={styles.image}
        alt={post.title}
        width={400}
        height={300}
        priority
      />
      <div className={styles.content}>
        <h1 className={styles.title}>{post.title}</h1>
        <p
          className={styles.body}
          dangerouslySetInnerHTML={{ __html: post.body }}
        />
      </div>
    </div>
  );
};

export default BlogDetails;
