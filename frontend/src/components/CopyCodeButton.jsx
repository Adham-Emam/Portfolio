import { useEffect } from "react";

const CopyCodeButton = () => {
  useEffect(() => {
    // Select all pre elements and append a copy button with an icon to each
    document.querySelectorAll("pre").forEach((el) => {
      // Prevent adding multiple buttons if the component re-renders
      if (!el.querySelector(".copy-btn")) {
        const btn = document.createElement("button");
        btn.classList.add("copy-btn");

        const btnIcon = document.createElement("i");
        btnIcon.classList.add("fa", "fa-clone");

        btn.appendChild(btnIcon);
        btn.appendChild(document.createTextNode("Copy code"));

        el.appendChild(btn);
      }
    });

    // Add event listeners to copy buttons
    const copyButtons = document.querySelectorAll(".copy-btn");

    copyButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const code = button.previousElementSibling.innerText;
        navigator.clipboard
          .writeText(code)
          .then(() => {
            button.textContent = "Copied!";
            const icon = button.querySelector("i");
            if (icon) {
              icon.classList.remove("fa-clone");
              icon.classList.add("fa-check");
            }

            setTimeout(() => {
              button.textContent = "Copy code";
              if (icon) {
                icon.classList.remove("fa-check");
                icon.classList.add("fa-clone");
              }
            }, 2000);
          })
          .catch((err) => {
            console.error("Failed to copy text: ", err);
          });
      });
    });

    // Cleanup event listeners on component unmount
    return () => {
      copyButtons.forEach((button) => {
        button.removeEventListener("click", () => {});
      });
    };
  }, []);

  return null; // This component does not render anything itself
};

export default CopyCodeButton;
