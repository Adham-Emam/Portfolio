import React from "react";
import { CalculateAge } from "../";

import styles from "./About.module.css";

const About = () => {
  const skills = [
    { name: "JavaScript", level: 85 },
    { name: "Next Js", level: 77 },
    { name: "Python", level: 90 },
    { name: "Django", level: 87 },
    { name: "MySQL", level: 80 },
    { name: "Docker", level: 75 },
  ];

  return (
    <section className={styles.about}>
      <h2 className="section-title">About Me</h2>
      <p>
        I&rsquo;m a passionate Full Stack Developer skilled in Python and
        front-end technologies. I build robust applications and solve complex
        problems with Python, HTML, CSS, and JavaScript. Experienced in
        frameworks like Django and Flask, I ensure seamless user experiences.
        Currently, I&rsquo;m exploring advanced data analysis techniques.
        Let&rsquo;s connect to discuss tech trends, collaborations, or share
        insights.
      </p>
      <div className={styles.content}>
        <ul className={styles.userInfo}>
          <li>
            <strong>Location:</strong> Cairo, Egypt
          </li>
          <li>
            <strong>Freelance:</strong> Available
          </li>
          <li>
            <strong>Age:</strong> {CalculateAge()}
          </li>
          <li>
            <strong>Email:</strong>{" "}
            <a href="mailto:adhamh372002@gmail.com">adhamh372002@gmail.com</a>
          </li>
          <li>
            <strong>Phone:</strong>{" "}
            <a href="tel:+201128000832">+201128000832</a>
          </li>
        </ul>
        <ul className={styles.skillsProgress}>
          {skills.map((skill, index) => (
            <li key={index}>
              <h3>{skill.name}</h3>
              <div className={styles.bar}>
                <div
                  className={styles.progress}
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default About;
