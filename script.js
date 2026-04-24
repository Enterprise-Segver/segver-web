document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");

function updateHeaderState() {
  header.classList.toggle("is-compact", window.scrollY > 80);
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
