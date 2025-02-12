import React from "react";
import { BlogPosts, PageCount } from "../components";

import styles from "./styles.module.css";

export const metadata = {
  title: "Blogs | Adham Emam",
  description:
    "Explore a diverse collection of web development projects, showcasing skills in React, Next.js, Django, and more.",
  keywords:
    "web development, full-stack projects, portfolio, React, Next.js, Django, API, skill exchange, freelancing",
};

const BlogsPage = () => {
  const apiUrl = "http://127.0.0.1:8000/blogs/posts/";

  return (
    <section>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      <div className="container">
        <h1 className={styles.title}>The Big Data Blog</h1>
        <BlogPosts apiUrl={apiUrl} />
        <PageCount apiUrl={apiUrl} pageCount={8} />
      </div>
    </section>
  );
};

export default BlogsPage;
