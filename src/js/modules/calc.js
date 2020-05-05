const calc = (sizeSelector, materialSelector, optionsSelector, promocodeSelector, resultSelector) => {
  const size = document.querySelector(sizeSelector);
  const material = document.querySelector(materialSelector);
  const options = document.querySelector(optionsSelector);
  const promoCode = document.querySelector(promocodeSelector);
  const result = document.querySelector(resultSelector);

  let total = 0;

  function calcData() {
    total = (+size.value * +material.value) + +options.value;

    if(!size.value || !material.value) {
      result.textContent = 'Для расчета нужно выбрать размер картины и материал картины';
    } else if(promoCode.value === 'IWANTPOPART') {
      total*= 0.7;
      result.textContent = `${total}руб`;
    } else {
      result.textContent = `${total}руб`;
    }
  }

  size.addEventListener('change', calcData);
  material.addEventListener('change', calcData);
  options.addEventListener('change', calcData);
  promoCode.addEventListener('input', calcData);
};
export default calc;