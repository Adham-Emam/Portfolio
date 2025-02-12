import React from "react";

import { FaPhoneAlt } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import styles from "./styles.module.css";

const Contact = () => {
  return (
    <div className={`${styles.container} container`}>
      <div className={styles.header}>
        <h1 className="section-title">Contact Me</h1>
        <p>Have Any Questions</p>
        <p>Feel free to contact me</p>
      </div>
      <ul className={styles.contact}>
        <li>
          <FaPhoneAlt />
          <h3>Call Us On</h3>
          <span>+20 112 800 0832</span>
        </li>
        <li>
          <FaLocationDot />
          <h3>Our Location</h3>
          <span>Egypt</span>
        </li>
        <li>
          <MdEmail />
          <h3>Email</h3>
          <span>adhamh372002@gmail.com</span>
        </li>
      </ul>
      <form
        action="https://formspree.io/f/xdoqlgvy"
        method="POST"
        className={styles.form}
      >
        <div className={styles.formControl}>
          <input type="text" name="name" placeholder="Name" />
          <input type="email" name="email" placeholder="Email" />
        </div>
        <input type="text" name="subject" placeholder="Subject" />
        <textarea
          className={styles.textarea}
          name="message"
          placeholder="Message"
        />
        <button className={styles.btn} value="submit">
          Send Message
        </button>
      </form>
    </div>
  );
};

export default Contact;
