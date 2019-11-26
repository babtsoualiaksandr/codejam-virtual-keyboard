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

    { key: 'Backquote', val: { ru: { down: 'ё', up: 'Ё' }, en: { down: '`', up: '~' }, row: 0 } },
    { key: 'Digit1', val: { ru: { down: '1', up: '!' }, en: { down: '1', up: '!' }, row: 0 } },
    { key: 'Digit2', val: { ru: { down: '2', up: '"' }, en: { down: '2', up: '@' }, row: 0 } },
    { key: 'Digit3', val: { ru: { down: '3', up: '№' }, en: { down: '3', up: '#' }, row: 0 } },
    { key: 'Digit4', val: { ru: { down: '4', up: ';' }, en: { down: '4', up: '$' }, row: 0 } },
    { key: 'Digit5', val: { ru: { down: '5', up: '%' }, en: { down: '5', up: '%' }, row: 0 } },
    { key: 'Digit6', val: { ru: { down: '6', up: ':' }, en: { down: '6', up: '^' }, row: 0 } },
    { key: 'Digit7', val: { ru: { down: '7', up: '?' }, en: { down: '7', up: '&' }, row: 0 } },
    { key: 'Digit8', val: { ru: { down: '8', up: '*' }, en: { down: '8', up: '*' }, row: 0 } },
    { key: 'Digit9', val: { ru: { down: '9', up: '(' }, en: { down: '9', up: '(' }, row: 0 } },
    { key: 'Digit0', val: { ru: { down: '0', up: ')' }, en: { down: '0', up: ')' }, row: 0 } },
    { key: 'Digit-', val: { ru: { down: '-', up: '_' }, en: { down: '-', up: '_' }, row: 0 } },
    { key: 'Equal', val: { ru: { down: '=', up: '+' }, en: { down: '=', up: '+' }, row: 0 } },
    { key: 'Backspace', val: { ru: { down: 'Backspace', up: 'Backspace' }, en: { down: 'Backspace', up: 'Backspace' }, row: 0 } },

    { key: 'Tab', val: { ru: { down: 'Tab', up: 'Tab' }, en: { down: 'Tab', up: 'Tab' }, row: 1 } },
    { key: 'KeyQ', val: { ru: { down: 'й', up: 'Й' }, en: { down: 'q', up: 'Q' }, row: 1 } },
    { key: 'KeyW', val: { ru: { down: 'ц', up: 'Ц' }, en: { down: 'w', up: 'W' }, row: 1 } },
    { key: 'KeyE', val: { ru: { down: 'у', up: 'У' }, en: { down: 'e', up: 'E' }, row: 1 } },
    { key: 'KeyR', val: { ru: { down: 'к', up: 'К' }, en: { down: 'r', up: 'R' }, row: 1 } },
    { key: 'KeyT', val: { ru: { down: 'е', up: 'Е' }, en: { down: 't', up: 'T' }, row: 1 } },
    { key: 'KeyY', val: { ru: { down: 'н', up: 'Н' }, en: { down: 'y', up: 'Y' }, row: 1 } },
    { key: 'KeyU', val: { ru: { down: 'г', up: 'Г' }, en: { down: 'u', up: 'U' }, row: 1 } },
    { key: 'KeyI', val: { ru: { down: 'ш', up: 'Ш' }, en: { down: 'i', up: 'I' }, row: 1 } },
    { key: 'KeyO', val: { ru: { down: 'щ', up: 'Щ' }, en: { down: 'o', up: 'O' }, row: 1 } },
    { key: 'KeyP', val: { ru: { down: 'з', up: 'З' }, en: { down: 'p', up: 'P' }, row: 1 } },
    { key: 'KeyOpen', val: { ru: { down: 'х', up: 'Х' }, en: { down: '[', up: '[' }, row: 1 } },
    { key: 'KeyClose', val: { ru: { down: 'ъ', up: 'Ъ' }, en: { down: ']', up: ']' }, row: 1 } },
    { key: 'Del', val: { ru: { down: 'Del', up: 'Del' }, en: { down: 'Del', up: 'Del' }, row: 1 } },
    { key: 'CapsLock', val: { ru: { down: 'Caps Lock', up: 'Caps Lock' }, en: { down: 'Caps Lock', up: 'Caps Lock' }, row: 2 } },
    { key: 'KeyA', val: { ru: { down: 'ф', up: 'Ф' }, en: { down: 'a', up: 'A' }, row: 2 } },
    { key: 'KeyS', val: { ru: { down: 'ы', up: 'Ы' }, en: { down: 's', up: 'S' }, row: 2 } },
    { key: 'KeyD', val: { ru: { down: 'в', up: 'В' }, en: { down: 'd', up: 'D' }, row: 2 } },
    { key: 'KeyF', val: { ru: { down: 'а', up: 'А' }, en: { down: 'f', up: 'F' }, row: 2 } },
    { key: 'KeyG', val: { ru: { down: 'п', up: 'П' }, en: { down: 'g', up: 'G' }, row: 2 } },
    { key: 'KeyH', val: { ru: { down: 'р', up: 'Р' }, en: { down: 'h', up: 'H' }, row: 2 } },
    { key: 'KeyJ', val: { ru: { down: 'о', up: 'О' }, en: { down: 'j', up: 'J' }, row: 2 } },
    { key: 'KeyK', val: { ru: { down: 'л', up: 'Л' }, en: { down: 'k', up: 'K' }, row: 2 } },
    { key: 'KeyL', val: { ru: { down: 'д', up: 'Д' }, en: { down: 'l', up: 'L' }, row: 2 } },
    { key: 'Semicolon', val: { ru: { down: 'ж', up: 'Ж' }, en: { down: ';', up: ':' }, row: 2 } },
    { key: 'Quote', val: { ru: { down: 'э', up: 'Э' }, en: { down: '\'', up: '"' }, row: 2 } },
    { key: 'Backslash', val: { ru: { down: '\\', up: '\\' }, en: { down: '\\', up: '|' }, row: 2 } },
    { key: 'Enter', val: { ru: { down: 'Enter', up: 'Enter' }, en: { down: 'Enter', up: 'Enter' }, row: 2 } },

    { key: 'ShiftLeft', val: { ru: { down: 'Shift', up: 'Shift' }, en: { down: 'Shift', up: 'Shift' }, row: 3 } },
    { key: 'Key<', val: { ru: { down: 'ф', up: 'Ф' }, en: { down: 'a', up: 'A' }, row: 3 } },
    { key: 'KeyZ', val: { ru: { down: 'ы', up: 'Ы' }, en: { down: 's', up: 'S' }, row: 3 } },
    { key: 'KeyX', val: { ru: { down: 'в', up: 'В' }, en: { down: 'd', up: 'D' }, row: 3 } },
    { key: 'KeyC', val: { ru: { down: 'а', up: 'А' }, en: { down: 'f', up: 'F' }, row: 3 } },
    { key: 'KeyV', val: { ru: { down: 'п', up: 'П' }, en: { down: 'g', up: 'G' }, row: 3 } },
    { key: 'KeyB', val: { ru: { down: 'р', up: 'Р' }, en: { down: 'h', up: 'H' }, row: 3 } },
    { key: 'KeyN', val: { ru: { down: 'о', up: 'О' }, en: { down: 'j', up: 'J' }, row: 3 } },
    { key: 'KeyM', val: { ru: { down: 'л', up: 'Л' }, en: { down: 'k', up: 'K' }, row: 3 } },
    { key: 'Key,', val: { ru: { down: 'д', up: 'Д' }, en: { down: 'l', up: 'L' }, row: 3 } },
    { key: 'Key.', val: { ru: { down: 'ж', up: 'Ж' }, en: { down: ';', up: ':' }, row: 3 } },
    { key: 'Key?', val: { ru: { down: 'э', up: 'Э' }, en: { down: '\'', up: '"' }, row: 3 } },
    { key: 'ArrowUp', val: { ru: { down: 'Up', up: 'Up' }, en: { down: 'Up', up: 'Up' }, row: 3 } },
    { key: 'ShiftRight', val: { ru: { down: 'Shift', up: 'Shift' }, en: { down: 'Shift', up: 'Shift' }, row: 3 } },

    { key: 'ControlLeft', val: { ru: { down: 'Ctrl', up: 'Ctrl' }, en: { down: 'Ctrl', up: 'Ctrl' }, row: 4 } },
    { key: 'Win', val: { ru: { down: 'Win', up: 'Win' }, en: { down: 'Win', up: 'Win' }, row: 4 } },
    { key: 'AltLeft', val: { ru: { down: 'Alt', up: 'Alt' }, en: { down: 'Alt', up: 'Alt' }, row: 4 } },
    { key: 'Space', val: { ru: { down: ' ', up: ' ' }, en: { down: ' ', up: ' ' }, row: 4 } },
    { key: 'AltRight', val: { ru: { down: 'Alt Gr', up: 'Alt Gr' }, en: { down: 'Alt Gr', up: 'Alt Gr' }, row: 4 } },
    { key: 'ControlRight', val: { ru: { down: 'Ctrl', up: 'Ctrl' }, en: { down: 'Ctrl', up: 'Ctrl' }, row: 4 } },
    { key: 'ArrowLeft', val: { ru: { down: 'Left', up: 'Left' }, en: { down: 'Left', up: 'Left' }, row: 4 } },
    { key: 'ArrowDown', val: { ru: { down: 'Down', up: 'Down' }, en: { down: 'Down', up: 'Down' }, row: 4 } },
    { key: 'ArrowRight', val: { ru: { down: 'Right', up: 'Right' }, en: { down: 'Right', up: 'Right' }, row: 4 } }
  ]

  for (let row_index = 0; row_index < 5; row_index++) {

    const row = document.createElement('div');
    row.className = "row";
    keyboard.appendChild(row);

    Keys.forEach((element, index) => {
      if (row_index === element.val.row) {
        const key = document.createElement('div');
        key.className = 'key ' + element.key.toLowerCase();

        const key_ru = document.createElement('span');
        key_ru.className = `${element.key.toLowerCase()} ru`;
        key.appendChild(key_ru);

        const key_ru_down = document.createElement('span');
        key_ru_down.className = `case down`;
        key_ru_down.textContent = element.val.ru.down;
        key_ru.appendChild(key_ru_down);

        const key_ru_up = document.createElement('span');
        key_ru_up.className = `case up`;
        key_ru_up.textContent = element.val.ru.up;
        key_ru.appendChild(key_ru_up);

        const key_en = document.createElement('span');
        key_en.className = `${element.key.toLowerCase()} en`;
        key.appendChild(key_en);

        const key_en_down = document.createElement('span');
        key_en_down.className = `case down`;
        key_en_down.textContent = element.val.en.down;
        key_en.appendChild(key_en_down);

        const key_en_up = document.createElement('span');
        key_en_up.className = `case up`;
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
  let altBtn = false;

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

  document.querySelector('.shiftleft').addEventListener('click', Change_language);
  document.querySelector('.capslock').addEventListener('click', Change_Shift);

  document.querySelector('.keyboard').addEventListener('mousedown', clickMouseDownOnKey);
  document.querySelector('.keyboard').addEventListener('mouseup', clickMouseKey);
  document.querySelector('.keyboard').addEventListener('mouseout', clickMouseKey);
  document.querySelector('.keyboard').addEventListener('click', clickMouseKey);

  document.addEventListener('keydown', pressKeyDown, false);
  document.addEventListener('keyup', pressKeyUp, false);




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
    const text = document.querySelector('#result');
    text.focus();
    const div = event.target.closest('div');
    const key = Keys.find((val) => (div.className.toLowerCase() === 'key ' + val.key.toLowerCase()))
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
        case 'CapsLock':
        case 'ShiftLeft':
        case 'ShiftRight':
        case 'ControlLeft':
        case 'ControlRight':
        case 'AltRight':
        case 'AltLeft': {
          break;
        }
        default: {
          text.value += key.val[language][shiftUp]
        }
      }
    }
    div.classList.add("clicked");
  }

  function clickMouseKey(event) {
    const div = event.target.closest('div');
    div.classList.remove("clicked");
  }

  function pressKeyDown(event) {
    event.preventDefault();
    const key = document.querySelector('.key.' + event.code.toLowerCase());
    if (key !== null) key.classList.add("clicked");
    if (event.keyCode === 18) {
      altBtn = true;
    }
    if (event.keyCode === 20) {
      Change_Shift();
    }
  }

  function pressKeyUp(event) {
    event.preventDefault();
    const key = document.querySelector('.key.' + event.code.toLowerCase());
    if (key !== null) key.classList.remove("clicked");
    if (event.keyCode === 0 && (altBtn)) {
      Change_language();
    }
  }
})()