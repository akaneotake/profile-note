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

// 文字を細字に変更
function checkFontWeight(event) {
  const checkbox = event.target;
  if (checkbox.checked) {
    $('input').css('font-weight', 'normal');
    $('textarea').css('font-weight', 'normal');
  } else {
    $('input').css('font-weight', 'bold');
    $('textarea').css('font-weight', 'bold');
  };
};

// inputへの文字入力量によってフォントサイズ変更
function resizeInput(event) {
  const input = event.target;
  let size = 20;
  let sizeS = 15;
  let sizeL = 27;

  if (input.classList.contains('font15px') == true) {
    if (input.offsetWidth < input.scrollWidth) {
      for (
        sizeS;
        input.offsetWidth < input.scrollWidth;
        sizeS -= 1
      ) {
        input.style.fontSize = sizeS + "px";
      }
    } else if (input.value === '') {
      sizeS = 15;
      input.style.fontSize = sizeS + "px";
    };
  } else if (input.classList.contains('font27px') == true) {
    if (input.offsetWidth < input.scrollWidth) {
      for (
        sizeL;
        input.offsetWidth < input.scrollWidth;
        sizeL -= 1
      ) {
        input.style.fontSize = sizeL + "px";
      }
    } else if (input.value === '') {
      sizeL = 27;
      input.style.fontSize = sizeL + "px";
    };
  } else {
    if (input.offsetWidth < input.scrollWidth) {
      for (
        size;
        input.offsetWidth < input.scrollWidth;
        size -= 1
      ) {
        input.style.fontSize = size + "px";
      }
    } else if (input.value === '') {
      size = 20;
      input.style.fontSize = size + "px";
    };
  };
};

// textareaの行数制限
function rowsLimit(event) {
  const textarea = event.target;
  const rows = textarea.value.split(/\r|\r\n|\n/);
  const rowsCount = rows.length;
  
  if (textarea.id === 'free-space') {
    if (rowsCount === 6 && event.key === 'Enter') {
      event.preventDefault();
    }
  } else if (textarea.classList.contains('image-game-textarea')) {
    if (rowsCount === 2 && event.key === 'Enter') {
      event.preventDefault();
    }
  } else {
    if (rowsCount === 3 && event.key === 'Enter') {  
      event.preventDefault();
    }
  };  
};

// アイコン画像のプレビュー表示
function showIconPreview(event) {
  const file = event.target.files;
  const iconPreview = document.getElementById('user-icon-preview');
  const iconChoose = document.getElementById('user-icon-choose');

  if (file) {
    iconPreview.style.backgroundImage = 'url(' + URL.createObjectURL(file[0]) + ')';
    iconPreview.style.display = 'block';
    iconChoose.style.opacity = 0;
  } else {
    iconPreview.style.display = 'none';
    iconChoose.style.opacity = 1;
  }
};

// 選択用ボタントグル
function selectButton(event) {
  const btn = event.target;

  if (btn.classList.contains('select-button-active')) {
    btn.classList.remove('select-button-active');
  } else {
    btn.classList.toggle('select-button-active');
  };
};

// ユーザー名に応じてダウンロード時のファイル名を変更
function changeFileName() {
  const name = document.getElementById('username').value;
  const downloadLink = document.getElementById('img-link');

  if (name) {
    downloadLink.setAttribute('download', name + 'のプロフィール帳.png');
  } else {
    downloadLink.setAttribute('download', '私のプロフィール帳.png');
  };
};

// スクリーンショット
function previewImg() {
  const captureImg = document.getElementById("image");
  html2canvas(captureImg).then(canvas => {
    const imageURL = canvas.toDataURL();

    document.getElementById('preview').setAttribute("src", canvas.toDataURL());
    document.getElementById("img-link").href = imageURL;

    document.getElementById('preview').style.display = "block";    
  });  
};

// 全てのイベントリスナー
window.onload = function() {
  // selectFont関数
  const fontSelect = document.querySelector('[name="font-select"]');
  fontSelect.addEventListener('change', selectFont);

  // selectColor関数
  const colorSelect = document.querySelector('[name="color-select"]');
  colorSelect.addEventListener('change', selectColor);

  // checkFontWeight関数
  const checkbox = document.getElementById('not-bold');
  checkbox.addEventListener('change', checkFontWeight);

  // resizeInput関数
  const input = document.querySelectorAll('input');
  input.forEach(function(e) {
    e.addEventListener('input', resizeInput);
  });

  // resizeTextarea関数
  const textarea = document.querySelectorAll('textarea');
  textarea.forEach(function(e) {
    e.addEventListener('keydown', rowsLimit);
  });

  // showIconPreview関数
  const iconChoose = document.getElementById('user-icon-choose');
  iconChoose.addEventListener('change', showIconPreview);

  // selectButton関数
  const selectBtn = document.querySelectorAll('.select-button');
  selectBtn.forEach(function(e) {
    e.addEventListener('click', selectButton);
  });

  // changeFileName関数
  const userName = document.getElementById('username');
  userName.addEventListener('change', changeFileName);

  // previewImg関数
  const btn = document.getElementById('preview-btn');
  btn.addEventListener('click', previewImg);

};