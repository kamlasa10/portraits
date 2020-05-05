const accordions = () => {
  const bindAccordion = (triggerSelector, wrapAccoSelector, contentSelector, activeSelector, activeContentSelector) => {
    const trigger = document.querySelectorAll(triggerSelector);
    const container = document.querySelector(wrapAccoSelector);
    const content = document.querySelectorAll(contentSelector);
    const activeTrigger = activeSelector.replace(/\./, '');
    const activeContent = activeContentSelector.replace(/\./, '');

    container.addEventListener('click', (e) => {
      const target = e.target;
      if(target && target.parentElement.classList.contains(triggerSelector.replace(/\./, ''))) {
        hideAccordion();
        trigger.forEach((item, idx = 0) => {
          if(target.parentElement === item) {
            showAccordion(idx);
          }
        })
      }
    })

    function hideAccordion() {
      trigger.forEach((item) => {
        item.classList.remove(`${activeTrigger}`);
      });

      content.forEach((item) => {
        item.style.display = 'none';
        item.classList.remove(`${activeContent}`, 'animate', 'fadeInDown');
      });
    }

    function showAccordion(idx) {
      trigger[idx].classList.add(`${activeTrigger}`);
      content[idx].style.display = 'block';
      content[idx].classList.add(`${activeContent}`, 'animate', 'fadeInDown');
    }

    hideAccordion();
    showAccordion(0);
  };

  bindAccordion('.accordion-heading', '#accordion', '.accordion-block', '.ui-accordion-header-active', '.ui-accordion-content-active');
};
export default accordions;