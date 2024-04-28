// Remove Loading screen
window.addEventListener(
  "load",
  document.querySelector(".loading").classList.add("loaded")
);

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

const progressBars = document.querySelector(".skills-progress");
const bars = document.querySelectorAll(".skills-progress span");

// // Progress Bars function
function progress() {
  const progressBarsTop = progressBars.getBoundingClientRect().top;

  const windowHeight = window.innerHeight;
  if (progressBarsTop < windowHeight) {
    bars.forEach((el) => {
      const progressValue = el.getAttribute("data-progress");
      el.style.width = progressValue;
    });
  } else {
    bars.forEach((el) => {
      el.style.width = 0;
    });
  }
}

// Add scroll event listener
window.addEventListener("scroll", () => {
  toggleFixedNavbar();
  toggleScrolledNavbar();
  progress();
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

// Select all sections
const sections = document.querySelectorAll(".section");

// Function to set opacity based on scroll position
function setOpacity() {
  sections.forEach((section) => {
    // Calculate the top position of the section
    const sectionTop = section.offsetTop;
    // Calculate the bottom position of the section
    const sectionBottom = sectionTop + section.offsetHeight;
    // Calculate the current scroll position
    const scrollPosition = window.scrollY + window.innerHeight;

    // If the current scroll position is within the section, set opacity to 1, otherwise set it to 0
    if (scrollPosition >= sectionTop) {
      section.classList.add("active");
    } else {
      section.classList.remove("active");
    }
  });
}

// Call the setOpacity function when the page is scrolled
window.addEventListener("scroll", setOpacity);
// Call the setOpacity function initially to set opacity for the sections visible on page load
setOpacity();
