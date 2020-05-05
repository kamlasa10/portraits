export const validateTextRu = (selector) => {
  const textInputs = document.querySelectorAll(selector);

  textInputs.forEach((item) => {
    item.addEventListener('keypress', (e) => {
      if (e.key.match(/[^а-я]/ig)) {
        e.preventDefault();
      }
    })
  })
}
