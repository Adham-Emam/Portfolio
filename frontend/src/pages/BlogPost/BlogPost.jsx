import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { CopyCodeButton, MoreBlogs } from "../../components";
import Blank from "../../assets/blank.jpg";
import "./BlogPost.css";

const BlogPost = () => {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  // const [comments, setComments] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  // const [name, setName] = useState("Anonymous User");
  // const [comment, setComment] = useState("");

  useEffect(() => {
    const fetchPostData = async () => {
      try {
        const response = await fetch(
          `http://127.0.0.1:8000/blogs/blogposts/${id}`
        );
        if (!response.ok) {
          throw new Error("Network response was not ok, Unalbe to Fetch blogs");
        }
        const data = await response.json();
        setPost(data);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    // const fetchComments = async () => {
    //   try {
    //     const response = await fetch(
    //       `http://127.0.0.1:8000/blogs/blogposts/${id}/comments/`
    //     );
    //     if (!response.ok) {
    //       throw new Error(
    //         "Network response was not ok, Unalbe to Fetch Comments"
    //       );
    //     }
    //     const commentsData = await response.json();
    //     setComments(commentsData);
    //   } catch (error) {
    //     setError(error);
    //   }
    // };

    fetchPostData();
    // fetchComments();
  }, [id]);

  // const handleSubmit = async (e) => {
  //   e.preventDefault();

  //   try {
  //     const response = await fetch(
  //       `http://127.0.0.1:8000/blogs/blogposts/${id}/comments/`,
  //       {
  //         method: "POST",
  //         headers: {
  //           "Content-Type": "application/json",
  //         },
  //         body: JSON.stringify({
  //           name,
  //           comment,
  //         }),
  //       }
  //     );

  //     if (!response.ok) {
  //       throw new Error(
  //         "Network response was not ok, Unable to send your comment."
  //       );
  //     }

  //     const newComment = await response.json();
  //     setComments((prevComments) => [...prevComments, newComment]);
  //     setName("");
  //     setComment("");
  //   } catch (error) {
  //     setError(error.message);
  //   }
  // };

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

  return (
    <>
      <div className="section-img">
        <div className="overlay"></div>
      </div>
      <div className="background">
        <div className="container">
          <article className="post">
            <div>
              <span>{formatDate(post.published_date)}</span>
              <h2 className="section-title">{post.title}</h2>
              <img src={post.img_url ? post.img_url : Blank} alt="Blog Image" />
              <div dangerouslySetInnerHTML={{ __html: post.body }} />
              <CopyCodeButton />
            </div>
          </article>
          <MoreBlogs />
          {/* <div className="comments container">
            <h3>Comments</h3>
            <ul>
              {comments.length > 0 ? (
                comments.map((item) => (
                  <li key={item.id}>
                    <span>{formatDate(item.created_at)}</span>
                    <h3>{item.autor_name}</h3>
                    <p>{item.body}</p>
                  </li>
                ))
              ) : (
                <li>No comments yet. Be the first to comment!</li>
              )}
            </ul>
          </div>
          <form onSubmit={handleSubmit}>
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
            <textarea
              name="comment"
              placeholder="Type A Comment"
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              required
            ></textarea>
            <input type="submit" value="Add Comment" className="btn" required />
          </form> */}
        </div>
      </div>
    </>
  );
};

export default BlogPost;
