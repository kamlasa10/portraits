const modals = () => {
    let isShowedPopup = false;
    let isBtnPressed = false;

    const bindModal = (triggerSelector, modalSelector, closeSelector, destroy = false, mobileMenu = false) => {
      const trigger = document.querySelectorAll(triggerSelector);
      const modal = document.querySelector(modalSelector);
      const close = document.querySelector(closeSelector);
      const allModal = document.querySelectorAll('[data-modal]');
      const forms = document.querySelectorAll('form');
      const scroll = calcScroll();

      trigger.forEach((item) => {
        item.addEventListener('click', (e) => {
          allModal.forEach((item) => {
            item.classList.add('animated', 'fadeIn');
            item.style.display = 'none';
          });
          e.preventDefault();
          isShowedPopup = true;
          isBtnPressed = true;
          if (destroy) {
            item.remove();
          }
          if (mobileMenu) {
            if (modal.style.display === 'block') {
              modal.style.display = 'none';
            } else {
              modal.style.display = 'block';
            }
            return
          }

          modal.style.display = 'block';
          document.body.style.marginRight = `${scroll}px`;
          document.body.style.overflow = 'hidden';
        });
      })
      modal.addEventListener('click', (e) => {
        if (e.target === modal) {
          modal.style.display = 'none';
          document.body.style.marginRight = `0px`;
          document.body.style.overflow = '';
        }
      })
      close.addEventListener('click', (e) => {
        e.preventDefault()
        modal.style.display = 'none';
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';

        modal.style.display = 'none';
        document.body.style.marginRight = `0px`;
        document.body.style.overflow = '';
      })
    };
    function showPopup(selector, time) {
      setTimeout(() => {
        if (!isShowedPopup) {
          document.querySelector(selector).style.display = 'block';
          document.body.style.overflow = 'hidden';
        }
      }, time)
    }

    function calcScroll() {
      let div = document.createElement('div');
      div.style.height = '50px';
      div.style.width = '50px';
      div.style.overflowY = 'scroll';
      div.style.visibility = 'hidden';

      document.body.appendChild(div);
      let scrollWidth = div.offsetWidth - div.clientWidth;
      div.remove();
      return scrollWidth;
    }

    function openByScroll(selector) {
      window.addEventListener('scroll', () => {
        if (!isBtnPressed && Math.ceil((window.pageYOffset + document.documentElement.clientHeight)) >= document.documentElement.scrollHeight) {
          document.querySelector(selector).click();
        }
      })
    }

    if (document.documentElement.clientWidth <= 992) {
      bindModal('.burger', '.burger-menu', '.popup-close', false, true);
    }

    window.addEventListener('resize', () => {
      if (document.documentElement.clientWidth <= 992) {
        bindModal('.burger', '.burger-menu', '.popup-close', false, true);
      }
    });

    bindModal('.button-design', '.popup-design', '.popup-design .popup-close');
    bindModal('.button-consultation', '.popup-consultation', '.popup-consultation .popup-close');
    bindModal('.fixed-gift', '.popup-gift', '.popup-gift .popup-close', true);
    showPopup('.popup-consultation', 60000);
    openByScroll('.fixed-gift');
  }
;
export default modals;