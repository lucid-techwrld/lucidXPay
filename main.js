window.addEventListener('scroll', () => {
  animationHead();
  animateGrowX();
  animateUp();
});

function animationHead() {
  const header = document.querySelector('.background');
  if (window.scrollY > 10) {
    header.classList.add('animate-bg');
  } else {
    header.classList.remove('animate-bg');
  }
}

function animateGrowX() {
  const growX = document.querySelectorAll('.animate-grow');
  growX.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('grow');
    } else {
      // Only remove the class if the animation is not still running
      if (!el.getAnimations().some((animation) => animation.playState === 'running')) {
        el.classList.remove('grow');
      }
    }
  });
}

// Check if elements are already within the viewport when the page loads
document.addEventListener('DOMContentLoaded', () => {
  const growX = document.querySelectorAll('.animate-grow');
  growX.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('grow');
    }
  });
});

function animateUp() {
  const growUp = document.querySelectorAll('.animate-up');
  growUp.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight) {
      el.classList.add('up');
    } else {
      // Only remove the class if the animation is not still running
      if (!el.getAnimations().some((animation) => animation.playState === 'running')) {
        el.classList.remove('up');
      }
    }
  });
}

let currentSlide = 0;

function changeSlide(direction) {
  const testimonials = document.querySelectorAll('.testimonial');
  const totalSlides = testimonials.length;

  // Remove the active class from the current slide
  testimonials[currentSlide].classList.remove('active');

  // Update the current slide index
  currentSlide = (currentSlide + direction + totalSlides) % totalSlides;

  // Add the active class to the new slide
  testimonials[currentSlide].classList.add('active');

  // Move the slider
  const slider = document.querySelector('.slider');
  slider.style.transform = `translateX(-${currentSlide * 100}%)`;
}

setInterval(() => {
  changeSlide(1);
}, 5000);