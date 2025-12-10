// Image list
const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
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


