import { useRef, useEffect, useState } from "react";

const ProgressBar = ({ progress }) => {
  const [isVisible, setIsVisible] = useState(false);
  const progressBarRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      {
        threshold: 0.1, // Adjust threshold as needed
      }
    );

    if (progressBarRef.current) {
      observer.observe(progressBarRef.current);
    }

    return () => {
      if (progressBarRef.current) {
        observer.unobserve(progressBarRef.current);
      }
    };
  }, []);

  return (
    <span
      ref={progressBarRef}
      style={{
        width: isVisible ? `${progress}%` : "0%",
      }}
    ></span>
  );
};

export default ProgressBar;
