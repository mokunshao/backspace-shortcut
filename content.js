var re = /DATALIST|KEYGEN|INPUT|OPTION|SELECT|TEXTAREA/i;
window.onkeyup = function (event) {
  if (event.key === 'Backspace') {
    const target = event.target;
    const tagName = target.tagName;
    if (re.test(tagName) || target.isContentEditable || tagName.includes("-")) {
      return;
    }
    event.preventDefault();
    if (event.shiftKey) {
      window.history.forward();
    } else {
      window.history.back();
    }
  }
};
