const photoSize = () => {
  const photosSizeBlocks = document.querySelectorAll('.sizes-block');
  const containerSize = document.querySelector('.sizes-wrapper');
  const photos = document.querySelectorAll('.sizes-block img');
  const bindPhoto = (action) => {

    containerSize.addEventListener(action, (e) => {
      let sizeStr = 'size-';
      const target = e.target;

      if(target.nodeName === 'IMG') {
        photos.forEach((item, i) => {
          i = i + 1;
          if(target.classList.contains(`${sizeStr}${i}`)) {
            target.src = `assets/img/sizes-${i}-1.png`;
            target.style.zIndex = 1;
            target.style.position = 'relative';
            target.parentElement.classList.add('animated', 'fadeIn');

            if(action === 'mouseout') {
              target.src = `assets/img/sizes-${i}.png`;
              target.style.zIndex = 0;
              target.style.position = 'static';
              target.parentElement.classList.remove('animated', 'fadeIn');
            }
          }
        });
      }
    });
  };

  bindPhoto('mouseover');
  bindPhoto('mouseout');
}
export default photoSize;