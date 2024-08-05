import { NavLink } from "react-router-dom";
import Hero from "../../assets/hero.jpg";
import { AgeCalculator, ProgressBar, TypingEffect } from "../../components";
import "./Home.css";

const Home = () => {
  return (
    <>
      <section id="home">
        <div className="container">
          <div className="hero">
            <h1>
              Hello, my name is <span>Adham Emam</span> <br />
              I&apos;m a <span className="auto-type"></span>
                <TypingEffect />
              
            </h1>
            <p>
              I&apos;m a web developer with an experience in Front-End and
              Back-End technologies, A creative developer with innovative ideas,
              I mainly work with this languages.
            </p>
            <div className="skills">
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/html-5--v1.png"
                alt="html"
                title="HTML"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/css3.png"
                alt="CSS"
                title="CSS"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/javascript--v1.png"
                alt="javascript"
                title="Javascript"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/bootstrap--v2.png"
                alt="bootstrap"
                title="Bootstrap"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/sass.png"
                alt="sass"
                title="SASS"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/tailwindcss.png"
                alt="Tailwind"
                title="Tailwind"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ios-glyphs/36/33CAF0/react.png"
                alt="react"
                title="React"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/python--v1.png"
                alt="python"
                title="Python"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/ffffff/48/flask.png"
                alt="Flask"
                title="Flask"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/django.png"
                alt="django"
                title="Django"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/mysql.png"
                alt="mysql"
                title="MySQL"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/36/git.png"
                alt="git"
                title="git"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/adobe-photoshop--v1.png"
                alt="adobe-photoshop--v1"
                title="Photoshop"
              />
              <img
                width="32"
                height="32"
                src="https://img.icons8.com/color/48/adobe-illustrator--v1.png"
                alt="adobe-photoshop--v1"
                title="Illustrator"
              />
            </div>
            <NavLink to="/contact" className="btn">
              Contact Me
            </NavLink>
          </div>
          <div className="image">
            <div></div>
            <img src={Hero} alt="Hero Image" />
          </div>
        </div>
        <div className="area">
          <ul className="circles">
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
      <section id="about">
        <div className="container">
          <h2 className="section-title">About Me</h2>
          <p>
            I&apos;m a passionate Full Stack Developer skilled in Python and
            front-end technologies. I build robust applications and solve
            complex problems with Python, HTML, CSS, and JavaScript. Experienced
            in frameworks like Django and Flask, I ensure seamless user
            experiences. Currently, I&apos;m exploring advanced data analysis
            techniques. Let&apos;s connect to discuss tech trends,
            collaborations, or share insights.
          </p>

          <div className="about-content">
            <div>
              <p>
                <b>Location :</b>
                <span>Egypt</span>
              </p>
              <p>
                <b>Freelance :</b>
                <span>Available</span>
              </p>
              <p>
                <b>Age :</b>{" "}
                <span className="age">
                  <AgeCalculator />
                </span>
              </p>
              <p>
                <b>Email :</b> <span>adhamh372002@gmail.com</span>
              </p>
              <p>
                <b>Phone :</b> <span>+20 112 800 0832</span>
              </p>
            </div>
            <div className="skills-progress">
              <h5>HTML</h5>
              <div>
                <ProgressBar progress={90} />
              </div>
              <h5>CSS</h5>
              <div>
                <ProgressBar progress={90} />
              </div>
              <h5>JavaScript</h5>
              <div>
                <ProgressBar progress={75} />
              </div>
              <h5>React.JS</h5>
              <div>
                <ProgressBar progress={67} />
              </div>
              <h5>Python</h5>
              <div>
                <ProgressBar progress={85} />
              </div>
              <h5>Django</h5>
              <div>
                <ProgressBar progress={80} />
              </div>
              <h5>Flask</h5>
              <div>
                <ProgressBar progress={75} />
              </div>
              <h5>SQL</h5>
              <div>
                <ProgressBar progress={80} />
              </div>
            </div>
          </div>
        </div>
        <div className="socials">
          <div className="container">
            <h3>Social Links</h3>
            <div className="links">
              <span>
                <a target="_blank" href="https://github.com/Adham-Emam/">
                  <i className="fa-brands fa-github"></i>
                </a>
              </span>
              <span>
                <a
                  target="_blank"
                  href="https://www.linkedin.com/in/adham-emam-91935a229/"
                >
                  <i className="fa-brands fa-linkedin"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://reddit.com/user/AdhamEmam">
                  <i className="fa-brands fa-reddit"></i>
                </a>
              </span>
              <span>
                <a target="_blank" href="https://instagram.com/adham_h_emam">
                  <i className="fa-brands fa-instagram"></i>
                </a>
              </span>
            </div>
          </div>
        </div>
        <div className="education">
          <div className="container">
            <h2 className="section-title">Education</h2>
            <div className="timeline">
              <div>
                <span>Sep 2021 - Jun 2024</span>
                <h4>Business Major | Cairo University</h4>
                <ul>
                  <li>
                    <p>
                      Excitedly anticipating graduation from Cairo
                      University&apos;s Faculty of Commerce with a focus on
                      business.
                    </p>
                  </li>
                  <li>
                    <p>
                      Eager to leverage my education in future professional
                      endeavors.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <span>Nov 2023</span>
                <h4>CS50 Intro to Programming with Python</h4>
                <ul>
                  <li>
                    <p>
                      This intensive course provided a comprehensive
                      introduction to computer science and programming using
                      Python. I gained a solid understanding of fundamental
                      concepts, problem-solving strategies, and the ability to
                      translate ideas into functioning code.
                    </p>
                  </li>
                  <li>
                    <p>
                      Through challenging problem sets and engaging projects, I
                      honed my programming skills and developed a logical
                      approach to algorithmic challenges.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <span>Oct 2023</span>
                <h4>Web Development</h4>
                <p>
                  Certificate on completing scholarship sponsored by Ministry of
                  Communication and Information Technology
                </p>
              </div>
              <div>
                <h4>Freelancing</h4>
                <ul>
                  <li>
                    <p>
                      As a freelance web developer, I bring a unique blend of
                      business understanding and technical expertise to every
                      project.
                    </p>
                  </li>
                  <li>
                    <p>
                      Proficient in front-end technologies such as HTML, CSS,
                      and JavaScript, and equipped with back-end skills using
                      Python, Flask, Django and SQL, I create dynamic and
                      user-friendly websites.
                    </p>
                  </li>
                  <li>
                    <p>
                      I specialize in delivering tailor-made solutions that not
                      only meet the technical requirements but also align with
                      the client&apos;s business goals.
                    </p>
                  </li>
                  <li>
                    <p>
                      From concept to execution, I ensure a seamless and
                      collaborative development process.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <span>Cairo University, Student Council</span>
                <h4>Graphic Designer</h4>
                <ul>
                  <li>
                    <p>
                      Designed promotional materials, including posters and
                      social media graphics, showcasing creativity and attention
                      to detail.
                    </p>
                  </li>
                  <li>
                    <p>
                      Collaborated with team members to bring visual concepts to
                      life, demonstrating effective communication and teamwork.
                    </p>
                  </li>
                </ul>
              </div>
              <div>
                <h4>University Final Project: Business Idea Development</h4>
                <span>
                  <strong>Role:</strong> Web Developer and Designer
                </span>
                <h5>Project Description:</h5>
                <ul>
                  <li>
                    <p>
                      Collaborated with a team to develop a business idea for a
                      real-life project as part of the university’s final
                      project.
                    </p>
                  </li>
                  <li>
                    <p>
                      Responsible for designing and developing the company’s
                      website, ensuring a responsive and visually appealing
                      design.
                    </p>
                  </li>
                </ul>
                <h5>Key Contributions:</h5>
                <ul>
                  <li>
                    <p>
                      Implemented a colorful and responsive design to enhance
                      user experience and engagement.
                    </p>
                  </li>
                  <li>
                    <p>
                      Managed database integration and ensured efficient data
                      handling.
                    </p>
                  </li>
                  <li>
                    <p>
                      Troubleshooted and resolved deployment and styling issues
                      to ensure a smooth and functional website.
                    </p>
                  </li>
                </ul>
                <h5>Skills Gained:</h5>
                <ul>
                  <li>
                    <p>Full-stack web development</p>
                  </li>
                  <li>
                    <p>Responsive web design</p>
                  </li>
                  <li>
                    <p>Problem-solving and troubleshooting</p>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Home;
