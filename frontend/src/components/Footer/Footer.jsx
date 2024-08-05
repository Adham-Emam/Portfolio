import './Footer.css'

const Footer = () => {
  return (
    <footer>
      <div className="container">
        <p>
          Made with love by <span>Adham</span>❤️
        </p>
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
    </footer>
  );
};

export default Footer;
