
/* =========================
   Theme System
========================= */

const themeBtn =
document.querySelector(".theme-btn");

let darkMode = true;

/* ===== Load Saved Theme ===== */

if(localStorage.getItem("theme") === "light"){

  enableLightMode();
}

/* ===== Toggle Theme ===== */

themeBtn.addEventListener("click", () => {

  darkMode = !darkMode;

  if(darkMode){

    enableDarkMode();

  }else{

    enableLightMode();
  }
});

/* ===== Dark Mode ===== */

function enableDarkMode(){

  document.documentElement.style.setProperty(
    "--bg-color",
    "#0f172a"
  );

  document.documentElement.style.setProperty(
    "--sidebar-color",
    "#111827"
  );

  document.documentElement.style.setProperty(
    "--card-color",
    "#1e293b"
  );

  document.documentElement.style.setProperty(
    "--text-color",
    "#ffffff"
  );

  document.documentElement.style.setProperty(
    "--text-light",
    "#94a3b8"
  );

  localStorage.setItem(
    "theme",
    "dark"
  );

  themeBtn.innerHTML =
  `<i class="ri-moon-fill"></i>`;
}

/* ===== Light Mode ===== */

function enableLightMode(){

  darkMode = false;

  document.documentElement.style.setProperty(
    "--bg-color",
    "#f1f5f9"
  );

  document.documentElement.style.setProperty(
    "--sidebar-color",
    "#ffffff"
  );

  document.documentElement.style.setProperty(
    "--card-color",
    "#ffffff"
  );

  document.documentElement.style.setProperty(
    "--text-color",
    "#0f172a"
  );

  document.documentElement.style.setProperty(
    "--text-light",
    "#475569"
  );

  localStorage.setItem(
    "theme",
    "light"
  );

  themeBtn.innerHTML =
  `<i class="ri-sun-fill"></i>`;
}

/* =========================
   Sidebar Active Links
========================= */

const navLinks =
document.querySelectorAll(".sidebar nav a");

navLinks.forEach(link => {

  link.addEventListener("click", () => {

    navLinks.forEach(item => {

      item.classList.remove("active");
    });

    link.classList.add("active");
  });
});

/* =========================
   Counter Animation
========================= */

const counters =
document.querySelectorAll(".card-info h1");

counters.forEach(counter => {

  const updateCounter = () => {

    const target =
    +counter.innerText
    .replace(/\D/g,'');

    let current =
    +counter.getAttribute("data-count")
    || 0;

    const increment =
    target / 80;

    if(current < target){

      current += increment;

      counter.setAttribute(
        "data-count",
        current
      );

      counter.innerText =
      Math.floor(current)
      .toLocaleString();

      requestAnimationFrame(
        updateCounter
      );

    }else{

      counter.innerText =
      target.toLocaleString();
    }
  };

  updateCounter();
});

/* =========================
   Search Animation
========================= */

const searchInput =
document.querySelector(".search-box input");

searchInput.addEventListener("focus", () => {

  document.querySelector(".search-box")
  .style.boxShadow =
  "0 0 20px rgba(56,189,248,0.35)";
});

searchInput.addEventListener("blur", () => {

  document.querySelector(".search-box")
  .style.boxShadow =
  "none";
});

/* =========================
   Welcome Animation
========================= */

window.addEventListener("load", () => {

  document.body.style.opacity = "0";

  setTimeout(() => {

    document.body.style.transition =
    "0.5s ease";

    document.body.style.opacity = "1";

  },100);
});