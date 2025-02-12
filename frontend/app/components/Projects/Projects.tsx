"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import { useSearchParams } from "next/navigation";
import { LoadingComp } from "../";
import { FormatDate } from "@/app/utils";

import styles from "./Projects.module.css";

interface Project {
  id: number;
  title: string;
  description: string;
  img_url: string;
  project_url: string;
  tags: string[];
  date_posted: string;
}

const Projects = ({ apiUrl }: { apiUrl: string }) => {
  const [projects, setProjects] = useState([]);
  const searchParams = useSearchParams();

  const currentPage = searchParams.get("page") || 1;
  const query = searchParams.get("search") || "";

  useEffect(() => {
    fetch(`${apiUrl}?search=${query}&page=${currentPage.toString()}`)
      .then((response) => response.json())
      .then((data) => setProjects(data.results));
  }, [currentPage, apiUrl, query]);

  return (
    <div className={styles.projects}>
      {projects.length > 0 ? (
        projects.map((project: Project, index: number) => (
          <div key={index} className={styles.project}>
            <Image
              src={project.img_url}
              alt={project.title}
              width={350}
              height={350}
              className={styles.projectImage}
            />
            <div className={styles.projectContent}>
              <span>{FormatDate(project.date_posted)}</span>
              <h2>{project.title}</h2>
              <p className={styles.projectDescription}>{project.description}</p>
              <div className={styles.projectTag}>
                {project.tags.map((tag: string, index: number) => (
                  <Link href={`/projects?search=${tag}`} key={index}>
                    {tag}
                  </Link>
                ))}
              </div>
              <a
                className={styles.projectLink}
                href={project.project_url}
                target="_blank"
              >
                View Project
              </a>
            </div>
          </div>
        ))
      ) : (
        <LoadingComp />
      )}
    </div>
  );
};

export default Projects;
