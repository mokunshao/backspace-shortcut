window.onkeyup = function (event) {
  if (event.key === 'Backspace') {
    var re = /DATALIST|KEYGEN|INPUT|OPTION|SELECT|TEXTAREA/i;
    if (!re.test(event.target.tagName) && !event.target.isContentEditable) {
      event.preventDefault();
      if (event.shiftKey) {
        window.history.forward();
      } else {
        window.history.back();
      }
    }
  }
};
