const slider = () => {

  function bindSlider(dir, slidesSelector, prevSelector, nextSelector) {
    const slides = document.querySelectorAll(slidesSelector);
    const prev = document.querySelector(prevSelector);
    const next = document.querySelector(nextSelector);
    let pause = false;
    let slideIndx = 1;

    function showSlide(n, dir) {

      if (slideIndx > slides.length) {
        n = 1;
        slideIndx = 1;
      } else if (slideIndx < 1) {
        slideIndx = slides.length;
        n = slides.length;
      }

      slides.forEach((item) => {
        item.classList.remove('animated', dir);
        item.style.display = 'none';
      });
      slides[n - 1].classList.add('animated', dir);
      slides[n - 1].style.display = 'block';
    }

    try {
      const next = document.querySelector(prevSelector);
      const prev = document.querySelector(nextSelector);
      next.addEventListener('click', () => {
        showSlide(slideIndx += 1, 'slideInLeft');
      });
      prev.addEventListener('click', () => {
        showSlide(slideIndx -= 1, 'slideInLeft');
      });
    } catch (e) {

    }
    function autoPlaySlide() {
      if (dir === 'vertical') {
        pause = setInterval(() => {
          showSlide(slideIndx += 1, 'fadeInDown');
        }, 5000)
      } else {
        pause = setInterval(() => {
          showSlide(slideIndx += 1, 'slideInLeft');
        }, 5000)
      }
    }

    showSlide(slideIndx);
    autoPlaySlide();

    slides[0].parentElement.addEventListener('mouseover', () => {
      clearInterval(pause);
    });
    slides[0].parentElement.addEventListener('mouseout', () => {
      autoPlaySlide(5000);
    })
  }

  bindSlider('', '.feedback-slider-item', '.main-prev-btn', '.main-next-btn');
  bindSlider('vertical', '.main-slider-item');
};
export default slider;