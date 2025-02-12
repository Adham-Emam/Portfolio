import React from "react";
import Image from "next/image";
import Link from "next/link";

import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={`${styles.container} container`}>
        <div className={styles.logo}>
          <Link href="/">
            <Image src="/logo.png" alt="logo" width={120} height={30} />
            <span>Full Stack Web Developer</span>
          </Link>
        </div>
        <div className={styles.links}>
          <h4>Social Links</h4>
          <span>
            <a target="_blank" href="https://github.com/Adham-Emam/">
              Github
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/adham-emam-91935a229/"
            >
              Linkedin
            </a>
          </span>
          <span>
            <a target="_blank" href="https://reddit.com/user/AdhamEmam">
              Reddit
            </a>
          </span>
          <span>
            <a target="_blank" href="https://instagram.com/adham_h_emam">
              Instagram
            </a>
          </span>
        </div>
        <div className={styles.subscribe}>
          <h4>Subscribe To My Blog Post</h4>
          <form>
            <input type="email" placeholder="Enter Your Email" />
            <button value={"submit"}>Subscribe</button>
          </form>
          <small>Don&rsquo;t worry, I won&rsquo;t spam you</small>
        </div>
      </div>
      <p>Made with love by Adham❤️.</p>
    </footer>
  );
};

export default Footer;
