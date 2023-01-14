// Window Onload
window.addEventListener("load", () => {
  if (window.localStorage.getItem("mode") == "light") {
    lightMode();
  } else if (window.localStorage.getItem("mode") == "dark") {
    darkMode();
  }
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("main-color")
  );
});

// Aside Menu Active
let asideMenu = document.querySelectorAll("aside ul li");

asideMenu.forEach((li) => {
  li.addEventListener("click", (el) => {
    asideMenu.forEach((e) => {
      e.classList.remove("active");
    });
    el.currentTarget.classList.add("active");
  });
});

// Dark Mode
let sunIcon = document.querySelector(".fa-sun");
let moonIcon = document.querySelector(".fa-moon");

moonIcon.addEventListener("click", () => {
  window.localStorage.setItem("mode", "dark");
  darkMode();
});

sunIcon.addEventListener("click", () => {
  window.localStorage.setItem("mode", "light");
  lightMode();
});

function darkMode() {
  moonIcon.classList.remove("active");
  sunIcon.classList.add("active");
  document.documentElement.style.setProperty("--aside-background", "#111");
  document.documentElement.style.setProperty("--body-background", "#151515");
  document.documentElement.style.setProperty("--heading-color", "#fff");
  document.documentElement.style.setProperty("--text-color", "#ccc");
  document.documentElement.style.setProperty("--shadow-color", "#0a0a0a");
}
function lightMode() {
  sunIcon.classList.remove("active");
  moonIcon.classList.add("active");
  document.documentElement.style.setProperty("--aside-background", "#eee");
  document.documentElement.style.setProperty("--body-background", "#fff");
  document.documentElement.style.setProperty("--heading-color", "#224");
  document.documentElement.style.setProperty("--text-color", "#333");
  document.documentElement.style.setProperty("--shadow-color", "#ccc");
}

// Menu Setting
let setting = document.querySelector(".setting");
let settingIcon = document.querySelector(".setting .fa-paint-roller");

settingIcon.addEventListener("click", () => {
  setting.classList.toggle("active");
});

document.addEventListener("click", (e) => {
  if (e.target.id !== "color-icon") {
    setting.classList.remove("active");
  }
});

// Main Color Change
let colors = document.querySelectorAll(".colors div span");

colors.forEach((el) => {
  el.addEventListener("click", (e) => {
    document.documentElement.style.setProperty(
      "--main-color",
      window
        .getComputedStyle(e.currentTarget, null)
        .getPropertyValue("background-color")
    );
    window.localStorage.setItem(
      "main-color",
      window
        .getComputedStyle(e.currentTarget, null)
        .getPropertyValue("background-color")
    );
  });
});
