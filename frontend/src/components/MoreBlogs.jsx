import { useEffect, useState } from "react";
import DOMPurify from "dompurify";

const MoreBlogs = () => {
  const [articles, setArticles] = useState([]);

  useEffect(() => {
    // Fetch all articles
    fetch("https://adhamemam.pythonanywhere.com/api/blogs/blogposts/")
      .then((response) => response.json())
      .then((data) => {
        // Shuffle array and select 4 random articles
        const shuffled = data.sort(() => 0.5 - Math.random());
        const selectedArticles = shuffled.slice(0, 4);
        setArticles(selectedArticles);
      })
      .catch((error) => {
        console.error("Error fetching articles:", error);
      });
  }, []);

  const stripHtmlTags = (html) => {
    return DOMPurify.sanitize(html, { ALLOWED_TAGS: [], KEEP_CONTENT: true });
  };

  const truncateContent = (content, maxLength) => {
    if (content.length > maxLength) {
      return content.substring(0, maxLength) + "...";
    }
    return content;
  };

  return (
    <div className="more-blogs container">
      <h2>Also Read</h2>
      <div>
        {articles.map((article) => (
          <article key={article.id} className="blog-card">
            <span>{new Date(article.published_date).toLocaleDateString()}</span>
            <h3>{article.title}</h3>
            <div className="content">
              {truncateContent(stripHtmlTags(article.body)).slice(0, 100) +
                ". . ."}
            </div>
            <a href={`/blog/${article.id}`}>Read More</a>
          </article>
        ))}
      </div>
    </div>
  );
};

export default MoreBlogs;
