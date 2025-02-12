"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Navbar.module.css";
import { FaHome, FaCubes } from "react-icons/fa";
import { MdArticle, MdClose } from "react-icons/md";
import { AiFillMessage } from "react-icons/ai";
import { RxHamburgerMenu } from "react-icons/rx";

const Navbar = () => {
  const [menuActive, setMenuActive] = useState(false);

  return (
    <nav className={styles.nav}>
      <div className={`container ${styles.container}`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={120} height={30} />
          </Link>
        </div>
        <ul className={`${styles.links} ${menuActive ? styles.active : ""}`}>
          <li>
            <Link href="/">
              <FaHome />
              Home
            </Link>
          </li>
          <li>
            <Link href="/projects">
              <FaCubes />
              Projects
            </Link>
          </li>
          <li>
            <Link href="/blog">
              <MdArticle />
              Blog
            </Link>
          </li>
          <li>
            <Link href="/contact">
              <AiFillMessage />
              Contact
            </Link>
          </li>
        </ul>
        <div className={styles.hamburger}>
          {menuActive ? (
            <MdClose onClick={() => setMenuActive(false)} />
          ) : (
            <RxHamburgerMenu onClick={() => setMenuActive(true)} />
          )}
        </div>
        <div
          className={`${styles.overlay} ${menuActive ? styles.active : ""}`}
          onClick={() => setMenuActive(false)}
        ></div>
      </div>
    </nav>
  );
};

export default Navbar;
