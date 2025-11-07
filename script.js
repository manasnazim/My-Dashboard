const themeBtn = document.getElementById("theme-toggle");
if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    themeBtn.textContent = document.body.classList.contains("dark")
      ? " Light Mode"
      : " Dark Mode";
  });
}

const clock = document.getElementById("clock-display");
if (clock) {
  setInterval(() => {
    const now = new Date();
    clock.textContent = now.toLocaleTimeString();
  }, 1000);
}

function filterProjects(type) {
  document.querySelectorAll(".project-card").forEach(card => {
    card.style.display = (type === "all" || card.dataset.type === type) ? "block" : "none";
  });
}
