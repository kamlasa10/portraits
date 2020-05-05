const loadStyles = (triggerSelector, cards) => {
  const content = document.querySelectorAll(cards);
  const trigger = document.querySelector(triggerSelector);

  trigger.addEventListener('click', () => {
    content.forEach((item) => {
      item.classList.remove('hidden-lg', 'hidden-md', 'hidden-sm', 'hidden-xs');
      item.classList.add('col-sm-3', 'col-sm-offset-0', 'col-xs-10', 'col-xs-offset-1', 'animated', 'slideInUp');
      item.style.display = 'block';
    })

    trigger.remove();
  })
};
export default loadStyles;