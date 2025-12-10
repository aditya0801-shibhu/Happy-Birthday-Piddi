// Smooth fade on scroll
const panels = document.querySelectorAll(".panel");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = window.innerHeight;

  panels.forEach((sec, index) => {
    const sectionTop = index * height;
    const opacity = 1 - Math.abs(scrollY - sectionTop) / height;
    sec.style.opacity = Math.max(0, opacity);
  });
});

// Popup
const popup = document.getElementById("popup");
const specialBtn = document.getElementById("specialBtn");
const closePopup = document.getElementById("closePopup");

specialBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
