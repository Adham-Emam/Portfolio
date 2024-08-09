import { useEffect, useState } from "react";
import DOMPurify from "dompurify";
import "./Blog.css";
import { NavLink } from "react-router-dom";

const Blog = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/api/blogs/blogposts/")
      .then((response) => {
        if (!response.ok) {
          const error = new Error("Network response was not ok");
          error.code = response.status;
          throw error;
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return (
      <div className="container loading">
        <i className="fa-brands fa-python fa-spin"></i>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container error">
        {error.code && <h2 className="section-title"> {error.code}</h2>}
        <p>{error.message}</p>
      </div>
    );
  }

  // Function to format date
  const formatDate = (dateString) => {
    const options = { year: "numeric", month: "short", day: "numeric" };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  const stripHtmlTags = (html) => {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: [], KEEP_CONTENT: true });
  };

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  // Reverse the data array before mapping it
  const reversedData = [...data].reverse();

  return (
    <>
      <div className="section-img">
        <div className="overlay"></div>
      </div>
      <section className="blogs">
        <h1>The Big Data Blog</h1>
        <div className="blog-container">
          <div className="container">
            {reversedData.map((item) => (
              <article key={item.id} className="blog">
                <div className="head">
                  <h3>
                    {item.title.length > 30
                      ? truncateContent(stripHtmlTags(item.title), 30)
                      : item.title}
                  </h3>
                  <span>{formatDate(item.published_date)}</span>
                </div>
                <div
                  className="content"
                  dangerouslySetInnerHTML={{
                    __html: truncateContent(stripHtmlTags(item.body), 100),
                  }}
                />
                <NavLink to={`/blog/${item.id}`}>Read More</NavLink>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
