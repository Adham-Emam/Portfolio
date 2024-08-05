import { useEffect, useState } from "react";
import Blank from "../../assets/blank.jpg";
import "./Projects.css";

function Projects() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch("http://127.0.0.1:8000/projects/projects/")
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
      const options = { year: 'numeric', month: 'short', day: 'numeric'};
      return new Date(dateString).toLocaleDateString(undefined, options);
    };


  // Reverse the data array before mapping it
  const reversedData = [...data].reverse();


  return (
    <>
      <div className="section-img">
        <div className="overlay"></div>
      </div>
      <section className="projects">
        <h1>Where Ideas Come to Life</h1>

        <div className="project-container">
          <div className="container">
            {reversedData.map((item) => (
              <div key={item.id} className="project">
                <div className="image">
                  <img
                    src={item.img_url ? item.img_url : Blank}
                    alt="Project Image"
                  />
                </div>
                <div className="content">
                  <span>{formatDate(item.date_posted)}</span>
                  <h2>{item.title}</h2>
                  <div>
                    <p>{item.description}</p>
                  </div>
                  <a href={item.project_url} target="_blank">
                    <i className="fa-solid fa-link"></i> Project Link
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Projects;
