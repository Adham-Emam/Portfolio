// Nav icon animation
const navIcon = document.querySelector(".nav-icon");
const header = document.querySelector("header");

navIcon.addEventListener("click", () => {
  if (navIcon.classList.contains("active")) {
    navIcon.classList.remove("active");
    header.classList.remove("active-menu");
  } else {
    navIcon.classList.add("active");
    header.classList.add("active-menu");
  }
});

// close navbar menu
var closeNavbar = document
  .querySelectorAll("body > :not(header)")
  .forEach((e) =>
    e.addEventListener("click", () => {
      header.classList.remove("active-menu");
      navIcon.classList.remove("active");
    })
  );

// Function to toggle 'fixed' class based on scroll position
function toggleFixedNavbar() {
  if (window.scrollY >= 100) {
    header.classList.add("fixed");
    header.classList.remove("active-menu");
    navIcon.classList.remove("active");
  } else {
    header.classList.remove("fixed");
  }
}
// Function to toggle 'scrolled' class based on scroll position
function toggleScrolledNavbar() {
  if (window.scrollY >= window.innerHeight - 200) {
    header.classList.add("scrolled");
  } else {
    header.classList.remove("scrolled");
  }
}

// Progress Bars function
const progressBars = document.querySelector(".skills-progress");
const bars = document.querySelectorAll(".skills-progress span");

bars.forEach((el) => {
  const progressValue = el.getAttribute("data-progress");
  el.style.width = progressValue;
});

// Add scroll event listener
window.addEventListener("scroll", () => {
  toggleFixedNavbar();
  toggleScrolledNavbar();
});

function calculateAge(birthDate) {
  // Split the birth date string into year, month, and day
  const birthDateArray = birthDate.split("-");
  const birthYear = parseInt(birthDateArray[0]);
  const birthMonth = parseInt(birthDateArray[1]) - 1; // Months are 0 indexed in JavaScript
  const birthDay = parseInt(birthDateArray[2]);

  // Get current date
  const currentDate = new Date();

  // Calculate the age
  let age = currentDate.getFullYear() - birthYear;

  // Adjust age if the birthday hasn't occurred yet this year
  if (
    currentDate.getMonth() < birthMonth ||
    (currentDate.getMonth() === birthMonth && currentDate.getDate() < birthDay)
  ) {
    age--;
  }

  return age;
}

const birthDate = "2002-07-03";
const age = calculateAge(birthDate);
document.querySelector(".age").innerHTML = age;

