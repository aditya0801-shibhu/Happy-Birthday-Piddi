const panels = document.querySelectorAll(".panel");

function handleScroll() {
  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    const windowHeight = window.innerHeight;

    // panel ka center viewport ke kitna paas hai
    const distanceFromCenter =
      Math.abs(rect.top + rect.height / 2 - windowHeight / 2);

    let opacity = 1 - distanceFromCenter / (windowHeight / 2);
    opacity = Math.max(0, Math.min(1, opacity));

    panel.style.opacity = opacity;
  });
}

window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);
