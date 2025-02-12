"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { useSearchParams } from "next/navigation";
import { LoadingComp } from "../";
import { FormatDate, generateSlug } from "@/app/utils";

import styles from "./BlogPosts.module.css";

interface BlogPost {
  id: number;
  title: string;
  body: string;
  img_url: string;
  published_date: string;
}

const BlogPosts = ({ apiUrl }: { apiUrl: string }) => {
  const [blogPosts, setBlogPosts] = useState([]);
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") || 1;

  useEffect(() => {
    fetch(`${apiUrl}?page=${currentPage.toString()}`)
      .then((response) => response.json())
      .then((data) => setBlogPosts(data.results));
  }, [currentPage, apiUrl]);

  return (
    <div className={styles.blogPostsContainer}>
      {blogPosts.length > 0 ? (
        blogPosts.map((post: BlogPost, index: number) => (
          <div key={index} className={styles.blogPost}>
            <Image
              className={styles.blogPostImage}
              src={post.img_url}
              alt={post.title}
              width={400}
              height={300}
            />
            <div className={styles.blogPostContent}>
              <span>{FormatDate(post.published_date)}</span>
              <Link href={`/blog/${post.id}?t=${generateSlug(post.title)}`}>
                <h2 className={styles.blogPostTitle}>{post.title}</h2>
              </Link>
            </div>
          </div>
        ))
      ) : (
        <>
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
          <LoadingComp />
        </>
      )}
    </div>
  );
};

export default BlogPosts;
