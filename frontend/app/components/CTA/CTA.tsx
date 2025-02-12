import React from "react";

import styles from "./CTA.module.css";
import { FaGithub, FaInstagram, FaLinkedin, FaReddit } from "react-icons/fa";

const CTA = () => {
  return (
    <section className={styles.cta}>
      <div className={`container ${styles.container}`}>
        <div className={styles.content}>
          <h2>Let’s Connect!</h2>
          <p>
            Let’s stay connected! Follow me on these platforms to keep up with
            my latest projects and professional journey.
          </p>
        </div>
        <div className={styles.links}>
          <span>
            <a target="_blank" href="https://github.com/Adham-Emam/">
              <FaGithub />
            </a>
          </span>
          <span>
            <a
              target="_blank"
              href="https://www.linkedin.com/in/adham-emam-91935a229/"
            >
              <FaLinkedin />
            </a>
          </span>
          <span>
            <a target="_blank" href="https://reddit.com/user/AdhamEmam">
              <FaReddit />
            </a>
          </span>
          <span>
            <a target="_blank" href="https://instagram.com/adham_h_emam">
              <FaInstagram />
            </a>
          </span>
        </div>
      </div>
    </section>
  );
};

export default CTA;
