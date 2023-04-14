const slides = document.querySelectorAll('.slide');
let currentSlide = 0;

function showSlide() {
  slides.forEach(slide => slide.classList.remove('active'));
  slides[currentSlide].classList.add('active');
}

function nextSlide() {
  currentSlide++;
  if (currentSlide > slides.length - 1) {
    currentSlide = 0;
  }
  showSlide();
}

function prevSlide() {
  currentSlide--;
  if (currentSlide < 0) {
    currentSlide = slides.length - 1;
  }
  showSlide();
}

showSlide();

document.querySelector('.prev').addEventListener('click', prevSlide);
document.querySelector('.next').addEventListener('click', nextSlide);
