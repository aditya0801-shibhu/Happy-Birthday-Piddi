// Image list
const images = [
    "images/pic1.jpg",
    "images/pic2.jpg",
    "images/pic3.jpg",
    "images/pic4.jpg",
    "images/pic5.jpg"
];

const bg = document.getElementById("bg");

let currentIndex = 0;

// Initial background
bg.style.backgroundImage = `url(${images[0]})`;

window.addEventListener("scroll", () => {
    let scrollPosition = window.scrollY;
    let sectionHeight = window.innerHeight;

    let index = Math.floor(scrollPosition / sectionHeight);

    if (index !== currentIndex && index < images.length) {
        currentIndex = index;

        bg.style.opacity = 0;

        setTimeout(() => {
            bg.style.backgroundImage = `url(${images[currentIndex]})`;
            bg.style.opacity = 1;
        }, 600);
    }
});
