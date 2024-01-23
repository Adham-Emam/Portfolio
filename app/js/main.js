// Window Onload
let loading = document.querySelector(".loading");
window.addEventListener("load", () => {
  loading.remove();
  if (window.localStorage.getItem("mode") == "light") {
    lightMode();
  } else if (window.localStorage.getItem("mode") == "dark") {
    darkMode();
  }
  document.documentElement.style.setProperty(
    "--main-color",
    window.localStorage.getItem("main-color")
  );
  document.querySelectorAll("section:not(#home)").forEach((section) => {
    section.classList.add("hidden");
  });
});

// Aside Menu Active
let asideMenu = document.querySelectorAll("aside ul li");

asideMenu.forEach((li) => {
  li.addEventListener("click", (el) => {
    asideMenu.forEach((e) => {
      e.classList.remove("active");
    });
    document.querySelectorAll("section").forEach((section) => {
      section.classList.add("hidden");
    });
    document
      .querySelector(`section#${el.currentTarget.dataset.active}`)
      .classList.remove("hidden");
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
  document.documentElement.style.setProperty("--body-background", "#eee");
  document.documentElement.style.setProperty("--aside-background", "#fff");
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

window.addEventListener("scroll", () => {
  setting.classList.remove("active");
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

// Dynamic age & start year
var birthday = new Date("07/3/2002");
var month_diff = Date.now() - birthday.getTime();
var age_dt = new Date(month_diff);
var year = age_dt.getUTCFullYear();
var age = Math.abs(year - 1970);

document.querySelector(".age").innerHTML = age;

// Dynamic Progress Bars
let skillsProgress = document.querySelectorAll(".skills-progress div span");

document
  .querySelector("[data-active='about']")
  .addEventListener("click", () => {
    setTimeout(() => {
      skillsProgress.forEach((span) => {
        span.style.width = span.dataset.progress;
      });
    }, 100);
  });
document.querySelector("#home .btn").addEventListener("click", () => {
  document.querySelectorAll("section").forEach((section) => {
    section.classList.add("hidden");
  });
  asideMenu.forEach((li) => {
    li.classList.remove("active");
    document.querySelector('[data-active="about"]').classList.add("active");
  });
  about.classList.remove("hidden");
  setTimeout(() => {
    skillsProgress.forEach((span) => {
      span.style.width = span.dataset.progress;
    });
  }, 100);
});

// Project Img Popup
let projectImg = document.querySelectorAll("#projects .box img");

projectImg.forEach((el) => {
  el.addEventListener("click", (e) => {
    let overlay = document.createElement("div");
    overlay.className = "overlay";
    overlay.addEventListener("click", () => {
      overlay.remove();
      popup.remove();
    });

    let removeBtn = document.createElement("span");
    removeBtn.className = "remove";
    removeBtn.addEventListener("click", () => {
      overlay.remove();
      popup.remove();
    });

    let removeIcon = document.createElement("i");
    removeIcon.className = "fa-solid fa-x";

    let popup = document.createElement("div");
    popup.className = "popup";

    let imgClone = e.currentTarget.cloneNode(true);

    removeBtn.appendChild(removeIcon);
    popup.appendChild(removeBtn);
    popup.appendChild(imgClone);
    document.body.append(overlay);
    document.body.append(popup);
  });
});
