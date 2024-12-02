function toggleMenu() {
    document.querySelector(".menu").classList.toggle("display");
}

document.addEventListener("click", (e) => {
    if (!e.target.closest(".hamburger")) {
        document.querySelector(".menu").classList.remove("display");
    }
});

let currentIndex = 0;
const images = document.querySelectorAll(".carousel-image");
const totalImages = images.length;

let autoSlideInterval;

function moveSlide(step) {
    currentIndex = (currentIndex + step + totalImages) % totalImages;

    updateCarousel();
    resetAutoSlide();
}

function updateCarousel() {
    images.forEach((image, index) => {
        image.classList.remove("active");

        if (index === currentIndex) {
            image.classList.add("active");
        }
    });
}

function startAutoSlide() {
    autoSlideInterval = setInterval(() => moveSlide(1), 3000);
}

function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
}

updateCarousel();
startAutoSlide();
