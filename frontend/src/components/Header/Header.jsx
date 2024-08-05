import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import "./Header.css";

const Header = () => {
  const [isActive, setIsActive] = useState(false);

  const handleClick = () => {
    setIsActive(!isActive);
  };
  // Function to close the menu
  const closeMenu = () => {
    setIsActive(false);
  };

  useEffect(() => {
    // Handler to remove active-menu class on scroll
    const handleScroll = () => {
      setIsActive(false);
    };

    // Add event listeners
    window.addEventListener("scroll", handleScroll);

    // Clean up event listeners
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <header className={isActive ? "active-menu" : ""}>
        <div className="container">
          <div>
            <div className="logo">
              <NavLink to="/">
                <img src={Logo} alt="My Portfolio Logo" />
              </NavLink>
            </div>
            <nav>
              <ul>
                <li>
                  <NavLink to="/" end>
                    Home
                  </NavLink>
                </li>
                <li>
                  <NavLink to="/projects">Projects</NavLink>
                </li>
                <li>
                  <NavLink to="/blog">Blog</NavLink>
                </li>
                <li>
                  <NavLink to="/contact">Contact</NavLink>
                </li>
              </ul>
            </nav>
            <div
              className={`${isActive ? "active" : ""} nav-icon`}
              onClick={handleClick}
            >
              <span></span>
              <span></span>
              <span></span>
            </div>
          </div>
          <ul className="nav-menu">
            <li>
              <NavLink to="/" onClick={closeMenu}>
                <i className="fa-solid fa-home"></i> <span>Home</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/projects" onClick={closeMenu}>
                <i className="fa-solid fa-cubes"></i> <span>projects</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/blog" onClick={closeMenu}>
                <i className="fa-solid fa-blog"></i> <span>Blog</span>
              </NavLink>
            </li>
            <li>
              <NavLink to="/contact" onClick={closeMenu}>
                <i className="fa-solid fa-comments"></i> <span>Contact</span>
              </NavLink>
            </li>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
