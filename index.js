'use strict';
(function () {

  const wrapper = document.createElement('div');
  wrapper.className = 'wrapper';
  const textarea = document.createElement('textarea');
  textarea.id = 'result';
  textarea.setAttribute('rows', '10');
  textarea.setAttribute('cols', '100');
  wrapper.appendChild(textarea);
  const keyboard = document.createElement('div');
  keyboard.className = "keyboard";
  wrapper.appendChild(keyboard);


  const Keys = [

    { key: 'Backquote', val: { ru: { down: 'ё', up: 'Ё' }, en: { down: '`', up: '~' }, row: 0, kind: '' } },
    { key: 'Digit1', val: { ru: { down: '1', up: '!' }, en: { down: '1', up: '!' }, row: 0, kind: 'num' } },
    { key: 'Digit2', val: { ru: { down: '2', up: '"' }, en: { down: '2', up: '@' }, row: 0, kind: 'num' } },
    { key: 'Digit3', val: { ru: { down: '3', up: '№' }, en: { down: '3', up: '#' }, row: 0, kind: 'num' } },
    { key: 'Digit4', val: { ru: { down: '4', up: ';' }, en: { down: '4', up: '$' }, row: 0, kind: 'num' } },
    { key: 'Digit5', val: { ru: { down: '5', up: '%' }, en: { down: '5', up: '%' }, row: 0, kind: 'num' } },
    { key: 'Digit6', val: { ru: { down: '6', up: ':' }, en: { down: '6', up: '^' }, row: 0, kind: 'num' } },
    { key: 'Digit7', val: { ru: { down: '7', up: '?' }, en: { down: '7', up: '&' }, row: 0, kind: 'num' } },
    { key: 'Digit8', val: { ru: { down: '8', up: '*' }, en: { down: '8', up: '*' }, row: 0, kind: 'num' } },
    { key: 'Digit9', val: { ru: { down: '9', up: '(' }, en: { down: '9', up: '(' }, row: 0, kind: 'num' } },
    { key: 'Digit0', val: { ru: { down: '0', up: ')' }, en: { down: '0', up: ')' }, row: 0, kind: 'num' } },
    { key: 'Digit-', val: { ru: { down: '-', up: '_' }, en: { down: '-', up: '_' }, row: 0, kind: 'num' } },
    { key: 'Equal', val: { ru: { down: '=', up: '+' }, en: { down: '=', up: '+' }, row: 0, kind: 'num' } },
    { key: 'Backspace', val: { ru: { down: 'Backspace', up: 'Backspace' }, en: { down: 'Backspace', up: 'Backspace' }, row: 0, kind: '' } },

    { key: 'Tab', val: { ru: { down: 'Tab', up: 'Tab' }, en: { down: 'Tab', up: 'Tab' }, row: 1, kind: '' } },
    { key: 'KeyQ', val: { ru: { down: 'й', up: 'Й' }, en: { down: 'q', up: 'Q' }, row: 1, kind: '' } },
    { key: 'KeyW', val: { ru: { down: 'ц', up: 'Ц' }, en: { down: 'w', up: 'W' }, row: 1, kind: '' } },
    { key: 'KeyE', val: { ru: { down: 'у', up: 'У' }, en: { down: 'e', up: 'E' }, row: 1, kind: '' } },
    { key: 'KeyR', val: { ru: { down: 'к', up: 'К' }, en: { down: 'r', up: 'R' }, row: 1, kind: '' } },
    { key: 'KeyT', val: { ru: { down: 'е', up: 'Е' }, en: { down: 't', up: 'T' }, row: 1, kind: '' } },
    { key: 'KeyY', val: { ru: { down: 'н', up: 'Н' }, en: { down: 'y', up: 'Y' }, row: 1, kind: '' } },
    { key: 'KeyU', val: { ru: { down: 'г', up: 'Г' }, en: { down: 'u', up: 'U' }, row: 1, kind: '' } },
    { key: 'KeyI', val: { ru: { down: 'ш', up: 'Ш' }, en: { down: 'i', up: 'I' }, row: 1, kind: '' } },
    { key: 'KeyO', val: { ru: { down: 'щ', up: 'Щ' }, en: { down: 'o', up: 'O' }, row: 1, kind: '' } },
    { key: 'KeyP', val: { ru: { down: 'з', up: 'З' }, en: { down: 'p', up: 'P' }, row: 1, kind: '' } },
    { key: 'KeyOpen', val: { ru: { down: 'х', up: 'Х' }, en: { down: '[', up: '[' }, row: 1, kind: '' } },
    { key: 'KeyClose', val: { ru: { down: 'ъ', up: 'Ъ' }, en: { down: ']', up: ']' }, row: 1, kind: '' } },
    { key: 'Del', val: { ru: { down: 'Del', up: 'Del' }, en: { down: 'Del', up: 'Del' }, row: 1, kind: '' } },
    { key: 'CapsLock', val: { ru: { down: 'Caps Lock', up: 'Caps Lock' }, en: { down: 'Caps Lock', up: 'Caps Lock' }, row: 2, kind: '' } },
    { key: 'KeyA', val: { ru: { down: 'ф', up: 'Ф' }, en: { down: 'a', up: 'A' }, row: 2, kind: '' } },
    { key: 'KeyS', val: { ru: { down: 'ы', up: 'Ы' }, en: { down: 's', up: 'S' }, row: 2, kind: '' } },
    { key: 'KeyD', val: { ru: { down: 'в', up: 'В' }, en: { down: 'd', up: 'D' }, row: 2, kind: '' } },
    { key: 'KeyF', val: { ru: { down: 'а', up: 'А' }, en: { down: 'f', up: 'F' }, row: 2, kind: '' } },
    { key: 'KeyG', val: { ru: { down: 'п', up: 'П' }, en: { down: 'g', up: 'G' }, row: 2, kind: '' } },
    { key: 'KeyH', val: { ru: { down: 'р', up: 'Р' }, en: { down: 'h', up: 'H' }, row: 2, kind: '' } },
    { key: 'KeyJ', val: { ru: { down: 'о', up: 'О' }, en: { down: 'j', up: 'J' }, row: 2, kind: '' } },
    { key: 'KeyK', val: { ru: { down: 'л', up: 'Л' }, en: { down: 'k', up: 'K' }, row: 2, kind: '' } },
    { key: 'KeyL', val: { ru: { down: 'д', up: 'Д' }, en: { down: 'l', up: 'L' }, row: 2, kind: '' } },
    { key: 'Semicolon', val: { ru: { down: 'ж', up: 'Ж' }, en: { down: ';', up: ':' }, row: 2, kind: '' } },
    { key: 'Quote', val: { ru: { down: 'э', up: 'Э' }, en: { down: '\'', up: '"' }, row: 2, kind: '' } },
    { key: 'Backslash', val: { ru: { down: '\\', up: '\\' }, en: { down: '\\', up: '|' }, row: 2, kind: '' } },
    { key: 'Enter', val: { ru: { down: 'Enter', up: 'Enter' }, en: { down: 'Enter', up: 'Enter' }, row: 2, kind: '' } },

    { key: 'ShiftLeft', val: { ru: { down: 'Shift', up: 'Shift' }, en: { down: 'Shift', up: 'Shift' }, row: 3, kind: '' } },
    { key: 'Key<', val: { ru: { down: '/', up: '|' }, en: { down: '>', up: '<' }, row: 3, kind: '' } },
    { key: 'KeyZ', val: { ru: { down: 'я', up: 'Я' }, en: { down: 'z', up: 'Z' }, row: 3, kind: '' } },
    { key: 'KeyX', val: { ru: { down: 'ч', up: 'Ч' }, en: { down: 'x', up: 'X' }, row: 3, kind: '' } },
    { key: 'KeyC', val: { ru: { down: 'с', up: 'С' }, en: { down: 'c', up: 'C' }, row: 3, kind: '' } },
    { key: 'KeyV', val: { ru: { down: 'м', up: 'М' }, en: { down: 'v', up: 'V' }, row: 3, kind: '' } },
    { key: 'KeyB', val: { ru: { down: 'и', up: 'И' }, en: { down: 'b', up: 'B' }, row: 3, kind: '' } },
    { key: 'KeyN', val: { ru: { down: 'т', up: 'Т' }, en: { down: 'n', up: 'N' }, row: 3, kind: '' } },
    { key: 'KeyM', val: { ru: { down: 'ь', up: 'Ь' }, en: { down: 'm', up: 'M' }, row: 3, kind: '' } },
    { key: 'Key,', val: { ru: { down: 'б', up: 'Б' }, en: { down: ',', up: '<' }, row: 3, kind: '' } },
    { key: 'Key.', val: { ru: { down: 'ю', up: 'Ю' }, en: { down: '.', up: '>' }, row: 3, kind: '' } },
    { key: 'Key?', val: { ru: { down: '.', up: ',' }, en: { down: '/', up: '?' }, row: 3, kind: '' } },
    { key: 'ArrowUp', val: { ru: { down: 'Up', up: 'Up' }, en: { down: 'Up', up: 'Up' }, row: 3, kind: '' } },
    { key: 'ShiftRight', val: { ru: { down: 'Shift', up: 'Shift' }, en: { down: 'Shift', up: 'Shift' }, row: 3, kind: '' } },

    { key: 'ControlLeft', val: { ru: { down: 'Ctrl', up: 'Ctrl' }, en: { down: 'Ctrl', up: 'Ctrl' }, row: 4, kind: '' } },
    { key: 'Win', val: { ru: { down: 'Win', up: 'Win' }, en: { down: 'Win', up: 'Win' }, row: 4, kind: '' } },
    { key: 'AltLeft', val: { ru: { down: 'Alt', up: 'Alt' }, en: { down: 'Alt', up: 'Alt' }, row: 4, kind: '' } },
    { key: 'Space', val: { ru: { down: ' ', up: ' ' }, en: { down: ' ', up: ' ' }, row: 4, kind: '' } },
    { key: 'AltRight', val: { ru: { down: 'Alt Gr', up: 'Alt Gr' }, en: { down: 'Alt Gr', up: 'Alt Gr' }, row: 4, kind: '' } },
    { key: 'ControlRight', val: { ru: { down: 'Ctrl', up: 'Ctrl' }, en: { down: 'Ctrl', up: 'Ctrl' }, row: 4, kind: '' } },
    { key: 'ArrowLeft', val: { ru: { down: 'Left', up: 'Left' }, en: { down: 'Left', up: 'Left' }, row: 4, kind: '' } },
    { key: 'ArrowDown', val: { ru: { down: 'Down', up: 'Down' }, en: { down: 'Down', up: 'Down' }, row: 4, kind: '' } },
    { key: 'ArrowRight', val: { ru: { down: 'Right', up: 'Right' }, en: { down: 'Right', up: 'Right' }, row: 4, kind: '' } }
  ]

  for (let row_index = 0; row_index < 5; row_index++) {

    const row = document.createElement('div');
    row.className = 'row';
    row.classList.add(`row${row_index}`);
    keyboard.appendChild(row);

    Keys.forEach((element, index) => {
      if (row_index === element.val.row) {
        const key = document.createElement('div');
        key.className = 'key ' + element.key.toLowerCase();

        const key_ru = document.createElement('span');
        key_ru.className = `${element.key.toLowerCase()} ru`;
        key.appendChild(key_ru);

        const key_ru_down = document.createElement('span');
        if (element.val.kind != 'num') key_ru_down.className = `case down`;
        else key_ru_down.className = `case numDown`
        key_ru_down.textContent = element.val.ru.down;
        key_ru.appendChild(key_ru_down);

        const key_ru_up = document.createElement('span');
        if (element.val.kind != 'num') key_ru_up.className = `case up`
        else key_ru_up.className = `case numUp`
        key_ru_up.textContent = element.val.ru.up;
        key_ru.appendChild(key_ru_up);

        const key_en = document.createElement('span');
        key_en.className = `${element.key.toLowerCase()} en`;
        key.appendChild(key_en);

        const key_en_down = document.createElement('span');
        if (element.val.kind != 'num') key_en_down.className = `case down`
        else key_en_down.className = `case numDown`

        key_en_down.textContent = element.val.en.down;
        key_en.appendChild(key_en_down);

        const key_en_up = document.createElement('span');
        if (element.val.kind != 'num') key_en_up.className = `case up`
        else key_en_up.className = `case numUp`
        key_en_up.textContent = element.val.en.up;
        key_en.appendChild(key_en_up);

        row.appendChild(key);

        if (row_index === 4 && index == 8) index = 14;
      }
    });
  }

  document.body.append(wrapper);

  let language;
  let shiftUp;
  let altLeftPush = false;

  document.addEventListener("DOMContentLoaded", () => {
    language = localStorage.getItem('language_KeyBoard');
    if (language === null) language = 'en';
    languageSetStyle(language);

    shiftUp = localStorage.getItem('shiftUp_KeyBoard');
    if (shiftUp === null) shiftUp = 'down';
    ShiftSetStyle(shiftUp);

    document.querySelector("textarea").focus();

  });

  window.addEventListener("unload", function () {
    localStorage.setItem('language_KeyBoard', language);
    localStorage.setItem('shiftUp_KeyBoard', shiftUp);
  });

  function Change_language() {
    console.log('change Language')
    if (language === 'en') {
      language = 'ru'
    } else language = 'en';
    languageSetStyle(language);
  }

  function languageSetStyle(language) {
    localStorage.setItem('language_KeyBoard', language);
    const keysRu = document.querySelectorAll('.ru');
    const keysEn = document.querySelectorAll('.en');
    switch (language) {
      case 'ru': {
        keysEn.forEach(key => {
          key.style.display = 'none';
        });
        keysRu.forEach(key => {
          key.style.display = 'block';
        });
      }
        break;
      case 'en': {
        keysEn.forEach(key => {
          key.style.display = 'block';
        });
        keysRu.forEach(key => {
          key.style.display = 'none';
        });
      }
        break;
    }
  }

  function ShiftSetStyle(shiftUp) {
    localStorage.setItem('shiftUp_KeyBoard', shiftUp);
    const keysUp = document.querySelectorAll('.up');
    const keysDown = document.querySelectorAll('.down');
    const keysNumDown = document.querySelectorAll('.numDown');
    const keysNumUp = document.querySelectorAll('.numUp');
    keysNumDown.forEach(key => {
      key.style.display = 'block';
    });
    keysNumUp.forEach(key => {
      key.style.display = 'block';
    });
    switch (shiftUp) {
      case 'up': {
        keysDown.forEach(key => {
          key.style.display = 'none';
        });
        keysUp.forEach(key => {
          key.style.display = 'block';
        });
      }
        break;
      case 'down': {
        keysDown.forEach(key => {
          key.style.display = 'block';
        });
        keysUp.forEach(key => {
          key.style.display = 'none';
        });
      }
        break;
    }
  }

  document.querySelector('.keyboard').addEventListener('mousedown', clickMouseDownOnKey);
  document.querySelector('.keyboard').addEventListener('mouseup', clickMouseUp);
  document.addEventListener('keydown', pressKeyDown);
  document.addEventListener('keyup', pressKeyUp);

  function Change_Shift() {
    if (shiftUp === 'up') {
      shiftUp = 'down'
    } else shiftUp = 'up';
    ShiftSetStyle(shiftUp);
  }

  function getCaret(el) {
    if (el.selectionStart) {
      return el.selectionStart;
    } else if (document.selection) {
      el.focus();
      let r = document.selection.createRange();
      if (r == null) {
        return 0;
      }
      let re = el.createTextRange(),
        rc = re.duplicate();
      re.moveToBookmark(r.getBookmark());
      rc.setEndPoint('EndToStart', re);
      return rc.text.length;
    }
    return 0;
  }

  function resetCursor(txtElement, currentPos) {
    if (txtElement.setSelectionRange) {
      txtElement.focus();
      txtElement.setSelectionRange(currentPos, currentPos);
    } else if (txtElement.createTextRange) {
      let range = txtElement.createTextRange();
      range.moveStart('character', currentPos);
      range.select();
    }
  }

  function Backspace() {
    let textarea = document.querySelector('#result');
    let currentPos = getCaret(textarea);
    let text = textarea.value;
    let backSpace = text.substr(0, currentPos - 1) + text.substr(currentPos, text.length);
    textarea.value = backSpace;
    resetCursor(textarea, currentPos - 1);
  }

  function Del() {
    let textarea = document.querySelector('#result');
    let currentPos = getCaret(textarea);
    let text = textarea.value;
    let delStr = text.substr(0, currentPos) + text.substr(currentPos + 1, text.length);
    textarea.value = delStr;
    resetCursor(textarea, currentPos);
  }

  function Enter() {
    let textarea = document.querySelector('#result');
    let currentPos = getCaret(textarea);
    let text = textarea.value;
    let delStr = text.substr(0, currentPos) + `\n` + text.substr(currentPos + 1, text.length);
    textarea.value = delStr;
    resetCursor(textarea, currentPos);
  }

  function Tab() {
    let textarea = document.querySelector('#result');
    let currentPos = getCaret(textarea);
    let text = textarea.value;
    let delStr = text.substr(0, currentPos) + `\t` + text.substr(currentPos + 1, text.length);
    textarea.value = delStr;
    resetCursor(textarea, currentPos);
  }

  function clickMouseDownOnKey(event) {
    const div = event.target.closest('div');
    const key = Keys.find((val) => (div.className.toLowerCase() === 'key ' + val.key.toLowerCase()))
    if (key) clickDownKey(key.key);
  }


  function pressKeyDown(event) {
    clickDownKey(event.code);
  }

  function clickDownKey(keyCode) {
    const text = document.querySelector('#result');
    const div = document.querySelector(`.key.${keyCode.toLowerCase()}`)
    if (div !== null) div.classList.add("clicked");
    const key = Keys.find((val) => (keyCode === val.key));
    if (key != undefined) {
      switch (key.key) {
        case 'Backspace': {
          Backspace();
          break;
        }
        case 'Del': {
          Del();
          break;
        }
        case 'Enter': {
          Enter();
          break;
        }
        case 'Tab': {
          event.preventDefault();
          Tab();
          break;
        }
        case 'ArrowLeft': {
          let currentPos = getCaret(text);
          resetCursor(text, currentPos - 1);
          break;
        }
        case 'ArrowRight': {
          let currentPos = getCaret(text);
          resetCursor(text, currentPos + 1);
          break;
        }
        case 'ArrowUp': {
          text.dispatchEvent(new KeyboardEvent('keydown', {
            keyCode: 38,
            code: 'ArrowUp'
          }));
          text.focus();
          text.setSelectionRange(10, 11);
          break;
        }
        case 'ArrowDown': {
          let currentPos = getCaret(text);
          resetCursor(text, currentPos + 1);
          break;
        }
        case 'ShiftLeft': {
          if (altLeftPush) {
            console.log('altLeftPush = *', altLeftPush)
            Change_language();

          }
          else {
            console.log('altLeftPush= +++', altLeftPush);
            Change_Shift();
          }

          break;
        }
        case 'ShiftRight': {
          Change_Shift();
          break;
        }
        case 'AltLeft': {
          altLeftPush = true;
          console.log('altLeftPush=', altLeftPush)
          break;
        }

        case 'CapsLock': {
          Change_Shift();
          break;
        }
        case 'ControlLeft':
        case 'ControlRight':
        case 'AltRight': {
          break;
        }
        default: {
          if (key.val.kind === 'num') text.value += key.val[language].down
          else text.value += key.val[language][shiftUp]
        }
      }
    }

  }


  function clickMouseUp(event) {
    const div = event.target.closest('div');
    console.log(div.classList);
    if (div.classList[1] === 'shiftleft') {
      Change_Shift();
    }
    if (div.classList[1] === 'shiftright') {
      Change_Shift();
    }
    const clicked = document.querySelectorAll('.clicked');
    clicked.forEach(element => {
      element.classList.remove('clicked');
    });
  }

  function pressKeyUp(event) {
    const key = document.querySelector('.key.' + event.code.toLowerCase());
    if (key !== null) key.classList.remove("clicked");
    if (key.classList[1] === 'shiftleft' & !altLeftPush) {
      Change_Shift();
    }
    if (key.classList[1] === 'shiftright') {
      Change_Shift();
    }
    if (key.classList[1] === 'altleft') {
      altLeftPush = false
    }
  }


})()