function mask(selector) {
  function setCursorPosition(pos, elem) {
    elem.focus();
    if (elem.setSelectionRange) {
      elem.setSelectionRange(pos, pos)
    } else if (elem.createTextRange) {
      let range = elem.createTextRange();
      range.collapse(true);
      range.moveEnd("character", pos);
      range.moveStart("character", pos);
      range.select()
    }
  }

  function createMask() {
    let matrix = '+7(___)___ __ __',
      i = 0,
      def = matrix.replace(/\D/g, ""),
      val = this.value.replace(/\D/g, "");

    def.length >= val.length && (val = def);

    matrix = matrix.replace(/[_\d]/g, function(a) {
      return val.charAt(i++) || "_"
    });
    this.value = matrix;

    i = matrix.lastIndexOf(val.substr(-1));

    i < matrix.length && matrix !== this.defaultValue ? i++ : i = matrix.indexOf("_");
    setCursorPosition(i, this)
  }

  document.querySelectorAll(selector).forEach((item) => {
    item.addEventListener('input', createMask);
  })
}
export default mask;