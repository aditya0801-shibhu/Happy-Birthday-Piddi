/* SCROLL FADE */
const panels = document.querySelectorAll(".panel");

function handleScroll() {
  panels.forEach(panel => {
    const rect = panel.getBoundingClientRect();
    const h = window.innerHeight;
    const dist = Math.abs(rect.top + rect.height / 2 - h / 2);
    let opacity = 1 - dist / (h / 2);
    panel.style.opacity = Math.max(0, Math.min(1, opacity));
  });
}
window.addEventListener("scroll", handleScroll);
window.addEventListener("load", handleScroll);

/* LETTER LOGIC */
const revealBtn = document.getElementById("revealBtn");
const resetBtn = document.getElementById("resetBtn");
const sealCover = document.getElementById("sealCover");
const paper = document.getElementById("paper");
const letterText = document.getElementById("letterText");
const today = document.getElementById("today");

const text = `Happy Birthday Once Again 🌸
Hamesha Aise Hi Meri Zindagi Ko Light Karti Rehna ✨`;

today.textContent = new Date().toDateString();

revealBtn.onclick = () => {
  sealCover.classList.add("hidden");
  paper.classList.remove("hidden");
  letterText.textContent = "";
  let i = 0;
  const typing = setInterval(() => {
    letterText.textContent += text[i];
    i++;
    if (i >= text.length) clearInterval(typing);
  }, 35);
};

resetBtn.onclick = () => {
  paper.classList.add("hidden");
  sealCover.classList.remove("hidden");
};
