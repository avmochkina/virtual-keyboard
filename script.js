class Keyboard {
    constructor() {
        this.container = document.createElement('div');
        this.container.classList.add('container');
        const script = document.querySelector('script');
        script.parentNode.insertBefore(this.container, script);
        this.createHeader();
        this.createTextarea();
        this.createKeyboard();
        this.init();
        this.textarea()
    }

    createHeader() {
        const header = document.createElement('header');
        header.classList.add('header');
        const title = document.createElement('h1');
        title.classList.add('header__title');
        title.innerText = 'RSS Virtual Keyboard';
        const subtitle = document.createElement('h2');
        subtitle.classList.add('header__subtitle');
        subtitle.innerText = 'Keyboard was creating in the Windows OS.';
        const subtitle2 = document.createElement('h2');
        subtitle2.classList.add('header__subtitle');
        subtitle2.innerText = 'To switch the language use left Ctrl and Alt.';
        this.container.appendChild(header);
        header.appendChild(title);
        header.appendChild(subtitle);
        header.appendChild(subtitle2);
    }

    createTextarea() {
        const main = document.createElement('main');
        const textarea = document.createElement('textarea');
        textarea.classList.add('textarea-input');
        this.container.appendChild(main);
        main.appendChild(textarea);
        textarea.focus();
    }

    createKeyboard() {
        let keyboardHtml = '<div class="keyboard">';
        
        const codeKeys = [
            ['Backquote','Digit1','Digit2','Digit3','Digit4','Digit5','Digit6','Digit7','Digit8','Digit9','Digit0','Minus','Equal','Backspace'],
            ['Tab','KeyQ','KeyW','KeyE','KeyR','KeyT','KeyY','KeyU','KeyI','KeyO','KeyP','BracketLeft','BracketRight','Backslash'],
            ['CapsLock','KeyA','KeyS','KeyD','KeyF','KeyG','KeyH','KeyJ','KeyK','KeyL','Semicolon','Quote','Enter'],
            ['ShiftLeft','KeyZ','KeyX','KeyC','KeyV','KeyB','KeyN','KeyM','Comma','Period','Slash','ArrowUp','ShiftRight'],
            ['ControlLeft','AltLeft','Space','AltRight','ArrowLeft','ArrowDown','ArrowRight','ControlRight'],
        ]

        for (let i = 0; i < codeKeys.length; i++) {
            keyboardHtml += '<div class="keyboard__line">';
            let keys = codeKeys[i];
            for (let j = 0; j < keys.length; j++) {
                if (keys[j] === 'Backspace' || keys[j] === 'Enter' || keys[j] === 'ShiftLeft' || keys[j] === 'ShiftRight' || keys[j] === 'Tab') {
                    keyboardHtml += `<div class="keyboard__btn keyboard__btn_large" data-code="${keys[j]}"></div>`;
                }else if (keys[j] === 'Space') {
                    keyboardHtml += `<div class="keyboard__btn keyboard__btn_extralarge" data-code="${keys[j]}"></div>`;
                }else if (keys[j] === 'CapsLock') {
                    keyboardHtml += `<div class="keyboard__btn keyboard__btn_large" data-code="CapsLock"></div>`;
                }else {
                    keyboardHtml += `<div class="keyboard__btn" data-code="${keys[j]}"></div>`;
                }
            }
            keyboardHtml += '</div>';
        }
        keyboardHtml += '</div>';
        const main = this.container.querySelector('main');
        main.insertAdjacentHTML('beforeend', keyboardHtml);
    }
    
    keyboardLang(isEngLang, isShift) {
        const storedLang = localStorage.getItem('lang');
        if (storedLang && storedLang === 'ru') {
            isEngLang = false;
        }else {
            isEngLang = true; 
        }
        const keysLang = {
            keyRu: [
                'ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                'Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\',
                'CapsLk','ф','ы','в','а','п','р','о','л','д','ж','э','Enter',
                'Shift','я','ч','с','м','и','т','ь','б','ю','.','↑','Shift',
                'Ctrl','Alt',' ','Alt','←','↓','→','Ctrl',
            ],
            keyRuShift: [
                'Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace',
                'Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\',
                'CapsLk','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter',
                'Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','↑','Shift',
                'Ctrl','Alt',' ','Alt','←','↓','→','Ctrl',
            ],
            keyEn: [
                '`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace',
                'Tab','q','w','e','r','t','y','u','i','o','p','[','\]','\\',
                'CapsLk','a','s','d','f','g','h','j','k','l',';','\'','Enter',
                'Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift',
                'Ctrl','Alt',' ','Alt','←','↓','→','Ctrl',
            ],
            keyEnShift: [
                '~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace',
                'Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|',
                'CapsLk','A','S','D','F','G','H','J','K','L',':','"','Enter',
                'Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift',
                'Ctrl','Alt',' ','Alt','←','↓','→','Ctrl',
            ],
        };
      
        const btns = document.querySelectorAll('.keyboard__btn');
        const language = isEngLang ? 'keyEn' : 'keyRu';
        const keys = isShift ? keysLang[`${language}Shift`] : keysLang[language];
        for (let i = 0; i < keys.length; i++) {
            btns[i].textContent = keys[i];  
        }
    }

    init() {
        let isEngLang = true;
        let isShift;
        let isControlPressed = false;
        let isAltPressed = false;
        
        // Keydown event listener
        window.addEventListener("keydown", (e) => {
          let virtualKey = document.querySelector(`[data-code="${e.code}"]`);
      
          if (virtualKey) {
            virtualKey.classList.add("active");
      
            if (e.code === 'AltLeft' || e.code === 'Tab' || e.code === 'AltRight') {
              e.preventDefault();  
            } else if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
              isShift = true;
            }
            this.keyboardLang(isEngLang, isShift); 
        }
        });
        
        // Keyup event listener
        window.addEventListener("keyup", (e) => {
          const virtualKey = document.querySelector(`[data-code="${e.code}"]`);
          
          if (virtualKey) {
            virtualKey.classList.remove("active");
            
            if (e.code === 'ShiftLeft' || e.code === 'ShiftRight') {
              isShift = false;
            } else if (e.code === 'ControlLeft') {
              isControlPressed = true;
            } else if (e.code === 'AltLeft') {
              isAltPressed = true;
            }
            
            if (isControlPressed && isAltPressed) {
                isEngLang = !isEngLang;
                localStorage.setItem('lang', isEngLang ? 'en' : 'ru');
                isControlPressed = false;
                isAltPressed = false;
            }
            this.keyboardLang(isEngLang, isShift);
          }
          
        });
        this.keyboardLang(isEngLang, isShift);
    }


    
}
window.addEventListener("DOMContentLoaded", function () {
    const keyboard = new Keyboard();
});

