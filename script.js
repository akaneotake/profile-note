// inputへの文字入力量によってフォントサイズを変更
function resizeFont(event) {
  const input = event.target;
  let size = 16;

  if (input.offsetWidth < input.scrollWidth) {
    for (
      size;
      input.offsetWidth < input.scrollWidth;
      size -= 2
    ) {
      input.style.fontSize = size + "px";
    }
  } else if (input.value === '') {
    size = 16;
    input.style.fontSize = size + "px";
  };
};

window.onload=function() {
  const input = document.querySelector("input");
  input.addEventListener('input', resizeFont);
};