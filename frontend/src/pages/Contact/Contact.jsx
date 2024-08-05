import "./Contact.css";

const Contact = () => {
  return (
    <section id="contact">
      <div className="container">
        <h2 className="section-title">Contact me</h2>
        <h3>Have Any Questions?</h3>
        <p>Don&apos;t Hesitate to Mail Me</p>
        <div>
          <div className="box">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48cGF0aCBmaWxsPSJub25lIiBzdHJva2U9IiMwMGJlYzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIiBkPSJNNSA0aDRsMiA1bC0yLjUgMS41YTExIDExIDAgMCAwIDUgNUwxNSAxM2w1IDJ2NGEyIDIgMCAwIDEtMiAyQTE2IDE2IDAgMCAxIDMgNmEyIDIgMCAwIDEgMi0ybTEwIDNhMiAyIDAgMCAxIDIgMm0tMi02YTYgNiAwIDAgMSA2IDYiLz48L3N2Zz4="
              alt=""
            />
            <h4>Call Us On</h4>
            <p>+20 011 2800 0832</p>
          </div>
          <div className="box">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGJlYzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNOSAxMmEzIDMgMCAxIDAgNiAwYTMgMyAwIDEgMC02IDAiLz48cGF0aCBkPSJNNCAxMmE4IDggMCAxIDAgMTYgMGE4IDggMCAxIDAtMTYgMG04LTEwdjJtMCAxNnYybTgtMTBoMk0yIDEyaDIiLz48L2c+PC9zdmc+"
              alt=""
            />
            <h4>Our Location</h4>
            <p>Egypt</p>
          </div>
          <div className="box">
            <img
              src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIzMiIgaGVpZ2h0PSIzMiIgdmlld0JveD0iMCAwIDI0IDI0Ij48ZyBmaWxsPSJub25lIiBzdHJva2U9IiMwMGJlYzgiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCIgc3Ryb2tlLXdpZHRoPSIyIj48cGF0aCBkPSJNMyA3YTIgMiAwIDAgMSAyLTJoMTRhMiAyIDAgMCAxIDIgMnYxMGEyIDIgMCAwIDEtMiAySDVhMiAyIDAgMCAxLTItMnoiLz48cGF0aCBkPSJtMyA3bDkgNmw5LTYiLz48L2c+PC9zdmc+"
              alt=""
            />
            <h4>Email</h4>
            <p>adhamh372002@gmail.com</p>
          </div>
        </div>
      </div>
      <form method="POST" action="https://formspree.io/f/xdoqlgvy" >
        <div className="container">
          <div className="email">
            <input
              type="text"
              name="name"
              placeholder="Name"
              className="form-control"
              required
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              className="form-control"
              required
            />
          </div>
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            className="form-control"
            required
          />
          <textarea
            name="content"
            placeholder="What do you think about?"
          ></textarea>
          <input
            type="submit"
            className="btn btn-primary"
            value="Send Message"
          />
        </div>
      </form>
    </section>
  );
};

export default Contact;
