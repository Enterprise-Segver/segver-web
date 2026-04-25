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

const revealSections = document.querySelectorAll(".reveal-section");
const revealObserverSupported = "IntersectionObserver" in window;

revealSections.forEach((section) => section.classList.add("is-pending"));

requestAnimationFrame(() => {
  if (!revealObserverSupported) {
    revealSections.forEach((section) => {
      section.classList.add("is-visible");
      section.classList.remove("is-pending");
    });
    return;
  }

  const revealObserver = new IntersectionObserver(
    (entries, observer) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          return;
        }

        entry.target.classList.add("is-visible");
        entry.target.classList.remove("is-pending");
        observer.unobserve(entry.target);
      });
    },
    {
      threshold: 0.12,
      rootMargin: "0px 0px -8% 0px",
    }
  );

  revealSections.forEach((section) => revealObserver.observe(section));
});
