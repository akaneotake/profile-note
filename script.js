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

// フォント変更
function selectFont(event) {
  const fontSelect = event.target.value;

  switch (fontSelect) {
    case 'hand-written':
      $('input').css('font-family', '"Yomogi", cursive');
      break;
    case 'cute':
      $('input').css('font-family', '"Hachi Maru Pop", cursive');
      break;
    case 'cool':
      $('input').css('font-family', '"Reggae One", system-ui');
      break;
    case 'beautiful':
      $('input').css('font-family', '"Kaisei Tokumin", serif');
      break;
    case 'powerful':
      $('input').css('font-family', '"Dela Gothic One", sans-serif');
      break;
    case 'child':
      $('input').css('font-family', '"Darumadrop One", sans-serif');
      break;
    case 'adult':
      $('input').css('font-family', '"Yuji Syuku", serif');
      break;
    case 'dirty':
      $('input').css('font-family', '"Slackside One", cursive');
      break;
    default:
      $('input').css('font-family', '"Yomogi", cursive');
      console.log("デフォルトフォント");
  };
};

window.onload = function() {
  // resizeFont関数のイベントリスナー
  const input = document.querySelectorAll('input');
  input.forEach(function(e) {
    e.addEventListener('input', resizeFont);
  })

  // fontSelect関数のイベントリスナー
  const fontSelect = document.querySelector('[name="font-select"]');
  fontSelect.addEventListener('change', selectFont);
};