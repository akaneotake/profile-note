// 文字のフォント変更
function selectFont(event) {
  const fontSelect = event.target.value;

  switch (fontSelect) {
    case 'hand-written':
      $('input').css('font-family', '"Yomogi", cursive');
      $('textarea').css('font-family', '"Yomogi", cursive');
      break;
    case 'cute':
      $('input').css('font-family', '"Hachi Maru Pop", cursive');
      $('textarea').css('font-family', '"Hachi Maru Pop", cursive');
      break;
    case 'cool':
      $('input').css('font-family', '"Reggae One", system-ui');
      $('textarea').css('font-family', '"Reggae One", system-ui');
      break;
    case 'beautiful':
      $('input').css('font-family', '"Kaisei Tokumin", serif');
      $('textarea').css('font-family', '"Kaisei Tokumin", serif');
      break;
    case 'powerful':
      $('input').css('font-family', '"Dela Gothic One", sans-serif');
      $('textarea').css('font-family', '"Dela Gothic One", sans-serif');
      break;
    case 'child':
      $('input').css('font-family', '"Darumadrop One", sans-serif');
      $('textarea').css('font-family', '"Darumadrop One", sans-serif');
      break;
    case 'adult':
      $('input').css('font-family', '"Yuji Syuku", serif');
      $('textarea').css('font-family', '"Yuji Syuku", serif');
      break;
    case 'dirty':
      $('input').css('font-family', '"Slackside One", cursive');
      $('textarea').css('font-family', '"Slackside One", cursive');
      break;
    default:
      $('input').css('font-family', '"Yomogi", cursive');
      $('textarea').css('font-family', '"Yomogi", cursive');
  };
};

// 文字の色変更
function selectColor(event) {
  const colorSelect = event.target.value;

  switch (colorSelect) {
    case 'black':
      $('input').css('color', 'black');
      $('textarea').css('color', 'black');
      break;
    case 'red':
      $('input').css('color', 'red');
      $('textarea').css('color', 'red');
      break;
    case 'blue':
      $('input').css('color', 'blue');
      $('textarea').css('color', 'blue');
      break;
    case 'aqua':
      $('input').css('color', '#00BFFF');
      $('textarea').css('color', '#00BFFF');
      break;
    case 'yellow':
      $('input').css('color', '#FFD700');
      $('textarea').css('color', '#FFD700');
      break;
    case 'green':
      $('input').css('color', 'green');
      $('textarea').css('color', 'green');
      break;
    case 'lime':
      $('input').css('color', 'lime');
      $('textarea').css('color', 'lime');
      break;
    case 'purple':
      $('input').css('color', 'purple');
      $('textarea').css('color', 'purple');
      break;
    case 'orange':
      $('input').css('color', 'orange');
      $('textarea').css('color', 'orange');
      break;
    case 'pink':
      $('input').css('color', '#FF1493');
      $('textarea').css('color', '#FF1493');
      break;
    default:
      $('input').css('color', 'black');
      $('textarea').css('color', 'black');
  };
};

// 文字を太字に変更
function checkBold(event) {
  const checkbox = event.target;
  if (checkbox.checked) {
    $('input').css('font-weight', 'bold');
    $('textarea').css('font-weight', 'bold');
  } else {
    $('input').css('font-weight', 'normal');
    $('textarea').css('font-weight', 'normal');
  };
};

// inputへの文字入力量によってフォントサイズ変更
function resizeInput(event) {
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

// textareaの行数制限
function rowsLimit(event) {
  const textarea = event.target;
  const rows = textarea.value.split(/\r|\r\n|\n/);
  const rowsCount = rows.length;
  
  if (rowsCount === 3 && event.key === 'Enter') {  
    event.preventDefault();
  };  
};

// previewImg
function previewImg(event) {
  html2canvas(document.getElementById("image")).then(canvas => {
    console.log("canvasデータ: ",canvas);
    const imageURL = canvas.toDataURL();
    console.log("画像URL: ", imageURL);

    document.getElementById('preview').setAttribute("src", canvas.toDataURL());
    document.getElementById("img-link").href = imageURL;

    document.getElementById('preview').style.display = "block";
    
    //document.body.appendChild(canvas)
  });
};

window.onload = function() {
  // selectFont関数のイベントリスナー
  const fontSelect = document.querySelector('[name="font-select"]');
  fontSelect.addEventListener('change', selectFont);

  // selectColor関数のイベントリスナー
  const colorSelect = document.querySelector('[name="color-select"]');
  colorSelect.addEventListener('change', selectColor);

  // checkBold関数のイベントリスナー
  const checkbox = document.getElementById('bold');
  checkbox.addEventListener('change', checkBold);

  // resizeInput関数のイベントリスナー
  const input = document.querySelectorAll('input');
  input.forEach(function(e) {
    e.addEventListener('input', resizeInput);
  });

  // resizeTextarea関数のイベントリスナー
  const textarea = document.querySelectorAll('textarea');
  textarea.forEach(function(e) {
    e.addEventListener('keydown', rowsLimit);
  });

  // ボタン
  const btn = document.getElementById('preview-btn');
  btn.addEventListener('click', previewImg);


};