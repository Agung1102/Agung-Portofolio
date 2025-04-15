// Toggle class active
const navbarNav = document.querySelector(".navbar-nav");
const menu = document.querySelector("#Menu");

// Ketika menu diklik
menu.onclick = () => {
  navbarNav.classList.toggle("active");
};

// Klik di luar sidebar untuk menghilangkan nav
document.addEventListener("click", function (e) {
  if (!menu.contains(e.target) && !navbarNav.contains(e.target)) {
    navbarNav.classList.remove("active");
  }
});
