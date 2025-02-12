import React from "react";
import Image from "next/image";
import Link from "next/link";
import Skills from "../Skills/Skills";

import styles from "./Hero.module.css";

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.content}>
        <h1 className={styles.sectionTitle}>
          Hello, my name is <span>Adham Emam</span> <br />
          and I&apos;m a <span>Full-Stack Web Developer</span>
        </h1>
        <p>
          I&apos;m a web developer with an experience in Front-End and Back-End
          technologies, A creative developer with innovative ideas, I mainly
          work with this technologies.
        </p>
        <Skills />
        <Link href="/contact" className={styles.btn}>
          Contact Me
        </Link>
      </div>
      <div className={styles.image}>
        <div></div>
        <Image src="/hero.webp" alt="Hero Image" width={302.4} height={307.2} />
      </div>
      <div className={styles.area}>
        <ul className={styles.circles}>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
          <li></li>
        </ul>
      </div>
    </section>
  );
};

export default Hero;
