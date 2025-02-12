"use client";
import React, { useState, useEffect } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import styles from "./PageCount.module.css";

const PageCount = ({
  apiUrl,
  pageCount,
}: {
  apiUrl: string;
  pageCount: number;
}) => {
  const [pages, setPages] = useState(0);
  const searchParams = useSearchParams();
  const currentPage = searchParams.get("page") || "1";
  const query = searchParams.get("search") || "";
  const router = useRouter();

  useEffect(() => {
    fetch(`${apiUrl}?search=${query}`)
      .then((res) => res.json())
      .then((data) => setPages(data.count / pageCount))
      .then((data) => console.log(data));
  }, [apiUrl, pageCount, query]);

  return (
    pages > 1 && (
      <div className={styles.pageCount}>
        {Array.from({ length: pages }, (_, index) => (
          <button
            key={index}
            className={styles.pageButton}
            onClick={() => router.push(`?page=${index + 1}`)}
            disabled={currentPage === (index + 1).toString()}
          >
            {index + 1}
          </button>
        ))}
      </div>
    )
  );
};

export default PageCount;
