import React from "react";
import Image from "next/image";

import styles from "./Skills.module.css";

interface Skill {
  name: string;
  img_url: string;
}

async function fetchSkills() {
  try {
    const res = await fetch("http://127.0.0.1:8000/user_content/skills/", {
      cache: "force-cache",
    });
    if (!res.ok) {
      throw new Error(`Failed to fetch: ${res.statusText}`);
    }
    const skills = await res.json();
    return skills; // Ensure skills is an array
  } catch (error) {
    console.error("Error fetching skills:", error);
    return [];
  }
}

export default async function Skills() {
  const skills = await fetchSkills();

  return (
    <ul className={styles.skills}>
      {skills?.map((skill: Skill, index: number) => {
        return (
          <li key={index}>
            <Image
              width={32}
              height={32}
              src={skill.img_url}
              alt={skill.name}
              title={skill.name}
            />
          </li>
        );
      })}
    </ul>
  );
}
