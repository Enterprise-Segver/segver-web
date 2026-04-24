document.getElementById("year").textContent = new Date().getFullYear();

const header = document.querySelector(".site-header");
let isHeaderCompact = false;

function updateHeaderState() {
  const scrollPosition = window.scrollY;

  if (!isHeaderCompact && scrollPosition > 120) {
    isHeaderCompact = true;
    header.classList.add("is-compact");
  }

  if (isHeaderCompact && scrollPosition < 40) {
    isHeaderCompact = false;
    header.classList.remove("is-compact");
  }
}

updateHeaderState();
window.addEventListener("scroll", updateHeaderState, { passive: true });
