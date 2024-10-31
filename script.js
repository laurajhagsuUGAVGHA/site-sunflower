let slideIndex = 0;
showSlide(slideIndex);

function showSlide(index) {
    const slides = document.getElementsByClassName("carousel-container");
    const texts = document.getElementsByClassName("carousel-text");
    if (index < 0) {
        slideIndex = slides.length - 1;
    } else if (index >= slides.length) {
        slideIndex = 0;
    }
    for (let i = 0; i < slides.length; i++) {
        slides[i].classList.remove("active");
    }
    slides[slideIndex].classList.add("active");
    for (let i = 0; i < texts.length; i++) {
        texts[i].style.display = "none";
    }
    texts[slideIndex].style.display = "block";
}

function prevSlide() {
    showSlide(slideIndex -= 1);
}

function nextSlide() {
    showSlide(slideIndex += 1);
}




