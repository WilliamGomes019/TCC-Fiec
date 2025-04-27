document.addEventListener('DOMContentLoaded', () => {
    const carouselContainer = document.querySelector('.carousel-container');
    const images = carouselContainer.querySelectorAll('img');
    let currentIndex = 0;
    let autoplay = true;

    const showImage = (index) => {
        images.forEach((img, i) => {
            img.style.display = i === index ? 'block' : 'none';
        });
    };

    const nextImage = () => {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    };

    const prevImage = () => {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    };

    const toggleAutoplay = () => {
        autoplay = !autoplay;
        if (autoplay) {
            startAutoplay();
        } else {
            clearInterval(autoplayInterval);
        }
    };

    const startAutoplay = () => {
        autoplayInterval = setInterval(nextImage, 3000);
    };

    document.getElementById('next-btn').addEventListener('click', nextImage);
    document.getElementById('prev-btn').addEventListener('click', prevImage);
    document.getElementById('autoplay-toggle').addEventListener('click', toggleAutoplay);

    let autoplayInterval = setInterval(nextImage, 3000);
    showImage(currentIndex);
});