import {validateTextRu} from "./helpers";
import calc from "./calc";

const form = () => {
  const forms = Array.from(document.forms);
  const status = document.createElement('div');
  const statusMessage = {
    loading: 'Отправка...',
    success: 'В скором временни мы с вами свяжимся',
    failure: 'Что-то пошло нет так!'
  };

  const path = {
    question: 'assets/question.php',
    designer: 'assets/designer.php'
  }

  const photosFile = document.querySelectorAll('input[name=upload]');

  calc('#size', '#material', '#options', '.promocode', '.calc-price')

  photosFile.forEach((item) => {
    item.addEventListener('input', () => {
      let sourse = item.files[0].name;
      let shortFileName = '';
      let dots = '';
      dots = sourse.split('.')[0].length > 6 ? sourse.slice(0, 6) + '...' + sourse.split('.')[1] : sourse;
      item.previousElementSibling.textContent = dots;
    })
  });

  validateTextRu('input[name=name]');
  validateTextRu('input[name=message]');

  forms.forEach((item) => {
    item.addEventListener('submit', (e) => {
      e.preventDefault();
      status.textContent = statusMessage.loading;
      item.appendChild(status);

      const formData = new FormData(item);
      let api;
      api = item.closest('.popup-design') || item.classList.contains('form-calc') ? path.designer : path.question;

      serviceData(api, formData).then((res) => {
        try {
          item.style.display = 'none';
          status.textContent = statusMessage.success;
          item.closest('.popup-content').appendChild(status);
        } catch (e) {
          item.parentElement.appendChild(status);
        }
      }).catch((e) => {
        try {
          status.textContent = statusMessage.failure;
          item.style.display = 'none';
          item.closest('.popup-content').appendChild(status);
        } catch (e) {
          item.parentElement.appendChild(status);
        }
      }).finally(() => {
        setTimeout(() => {
          item.reset();
          item.style.display = 'block';
          document.querySelector('.calc-price').textContent = 'Для расчета нужно выбрать размер картины и материал картины';
          status.remove();
        }, 5000);
      })
    })
  })
};
const serviceData = async (url, data) => {
  return await fetch(url, {
    method: 'POST',
    body: data,
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded'
    }
  });
};
export default form;