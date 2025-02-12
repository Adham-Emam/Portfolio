import React from "react";
import { Projects, PageCount } from "../components";
import { IoSearchSharp } from "react-icons/io5";

import styles from "./styles.module.css";

export const metadata = {
  title: "Projects | Adham Emam",
  description:
    "Explore a diverse collection of web development projects, showcasing skills in React, Next.js, Django, and more.",
  keywords:
    "web development, full-stack projects, portfolio, React, Next.js, Django, API, skill exchange, freelancing",
};

const ProjectsPage = async () => {
  const apiUrl = `http://127.0.0.1:8000/projects/`;

  return (
    <section>
      <div className={styles.background}>
        <div className={styles.overlay}></div>
      </div>
      <div className="container">
        <h1 className={styles.title}>Where Ideas Come to Life</h1>
        <form className={styles.search} method="GET">
          <input
            type="text"
            name="search"
            placeholder="Search by skill or keyword..."
          />
          <button value="submit">
            <IoSearchSharp />
          </button>
        </form>
        <Projects apiUrl={apiUrl} />
        <PageCount apiUrl={apiUrl} pageCount={5} />
      </div>
    </section>
  );
};

export default ProjectsPage;
