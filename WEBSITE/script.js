let currentSlideIndex = 0;

function updateSlidePosition() {
    const slides = document.querySelector('.slider');
    const slideWidth = slides.querySelector('.slide').clientWidth;
    const gap = 20; // Adjust this if you've set a different gap in CSS
    slides.style.transform = `translateX(-${currentSlideIndex * (slideWidth + gap)}px)`;
    updateDots();
}

function nextSlide(event) {
    if (event) event.preventDefault(); // Prevent default behavior
    const totalSlides = document.querySelectorAll('.slide').length;
    const visibleSlides = Math.floor(document.querySelector('.slider-container').clientWidth / document.querySelector('.slide').clientWidth);
    if (currentSlideIndex < totalSlides - visibleSlides) {
        currentSlideIndex++;
        updateSlidePosition();
    }
}

function prevSlide(event) {
    if (event) event.preventDefault(); // Prevent default behavior
    if (currentSlideIndex > 0) {
        currentSlideIndex--;
        updateSlidePosition();
    }
}

function currentSlide(index) {
    currentSlideIndex = index;
    updateSlidePosition();
}

function updateDots() {
    const dots = document.querySelectorAll('.dot');
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentSlideIndex);
    });
}

