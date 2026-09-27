document.addEventListener('DOMContentLoaded', () => {
  const track = document.querySelector('.carousel-track');
  const slides = document.querySelectorAll('.slide');
  let currentSlide = 0;

  function showSlide(index) {
    currentSlide = index;
    track.style.transform = `translateX(-${index * 100}%)`;
  }

  document.querySelector('.prev').addEventListener('click', () => {
    showSlide((currentSlide - 1 + slides.length) % slides.length);
  });

  document.querySelector('.next').addEventListener('click', () => {
    showSlide((currentSlide + 1) % slides.length);
  });
});
