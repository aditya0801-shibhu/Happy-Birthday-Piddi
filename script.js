// Smooth opacity based scroll transition
const sections = document.querySelectorAll(".panel");

window.addEventListener("scroll", () => {
  const scrollY = window.scrollY;
  const height = window.innerHeight;

  sections.forEach((sec, i) => {
    const pos = i * height;
    const opacity = 1 - Math.abs(scrollY - pos) / height;
    sec.style.opacity = Math.max(0, opacity);
  });
});

// POPUP OPEN + CLOSE
const popup = document.getElementById("popup");
const specialBtn = document.getElementById("specialBtn");
const closePopup = document.getElementById("closePopup");

specialBtn.addEventListener("click", () => {
  popup.style.display = "flex";
});

closePopup.addEventListener("click", () => {
  popup.style.display = "none";
});
