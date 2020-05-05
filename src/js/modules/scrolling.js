const scrolling = () => {
  const links = document.querySelectorAll('[href^="#"]');

  links.forEach((item) => {
    item.addEventListener('click', function (e) {
      e.preventDefault();
      const hash = this.hash;
      const toBlock = document.querySelector(hash).getBoundingClientRect().top;
      let start = null;
      let speed = 0.5;
      requestAnimationFrame(step);

      function step(time) {
        if (start === null) {
          start = time;
        }

        let progress = time - start;
        let r = toBlock < 0 ? Math.max(progress / speed,toBlock) : Math.min(progress / speed,toBlock);

        document.documentElement.scrollTo(0, r);

        if (r !== toBlock) {
          requestAnimationFrame(step);
        } else {
          location.history = hash;
        }
      }
    });

  })
};
export default scrolling;