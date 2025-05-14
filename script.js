// Theme Toggle
const toggleBtn = document.getElementById("theme-toggle");

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.innerHTML = document.body.classList.contains("dark-mode")
    ? "☀️ <span>Light Mode</span>"
    : "🌙 <span>Dark Mode</span>";
});

// Scroll to Top Button
const topBtn = document.getElementById("topBtn");

window.onscroll = function () {
  topBtn.style.display = window.scrollY > 300 ? "block" : "none";
};

function scrollToTop() {
  window.scrollTo({ top: 0, behavior: "smooth" });
}
