const drop = () => {
  const inputs = document.querySelectorAll('[name="upload"]');

  ['dragenter', 'dragleave', 'dragover', 'drop'].forEach((dragName) => {
    inputs.forEach((item) => {
      item.addEventListener(dragName, preventDefaults, false);
    })
  });

  ['dragenter', 'dragover'].forEach((eventName) => {
    inputs.forEach((item) => {
      item.addEventListener(eventName, higlight);
    })
  });

  ['dragleave', 'drop'].forEach((eventName) => {
    inputs.forEach((item) => {
      item.addEventListener(eventName, unHiglight);
    })
  })

  function preventDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  function higlight(e) {
   this.closest('.file_upload').style.border = '5px solid #000';
  }

  function unHiglight(e) {
    this.closest('.file_upload').style.border = '';
  }

  inputs.forEach((item) => {
    item.addEventListener('drop', (e) => {
       item.files = e.dataTransfer.files;
       const arr = item.files[0].name.split('.');
      let dots = '';
      dots = arr[0].length > 6 ? arr[0].slice(0, 6) + '...' + arr[1] : arr.join('.');
      console.log(dots)
      item.previousElementSibling.textContent = dots;
    })
  })
};
export default drop;