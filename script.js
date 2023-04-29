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
        this.container.appendChild(header);
        header.appendChild(title);
        header.appendChild(subtitle);
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
        const rows = {
            keyRu: [
                ['ё','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                ['Tab','й','ц','у','к','е','н','г','ш','щ','з','х','ъ','\\','Del'],
                ['CapsLk','ф','ы','в','а','п','р','о','л','д','ж','э','Enter'],
                ['Shift','я','ч','с','м','и','т','ь','б','ю','.','↑','Shift'],
                ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
            ],
            keyRuShift: [
                ['Ё', '!', '"', '№', ';', '%', ':', '?', '*', '(', ')', '_', '+', 'Backspace'],
                ['Tab','Й','Ц','У','К','Е','Н','Г','Ш','Щ','З','Х','Ъ','\\','Del'],,
                ['CapsLk','Ф','Ы','В','А','П','Р','О','Л','Д','Ж','Э','Enter'],
                ['Shift','Я','Ч','С','М','И','Т','Ь','Б','Ю','.','↑','Shift'],
                ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
            ],
            keyEn: [
                ['`','1','2','3','4','5','6','7','8','9','0','-','=','Backspace'],
                ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'],
                ['CapsLk','a','s','d','f','g','h','j','k','l',';','\'','Enter'],
                ['Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift'],
                ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
            ],
            keyEnShift: [
                ['~','!','@','#','$','%','^','&','*','(',')','_','+','Backspace'],
                ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del'],
                ['CapsLk','A','S','D','F','G','H','J','K','L',':','"','Enter'],
                ['Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift'],
                ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
            ]
        }
        for (let i = 0; i < rows.keyEn.length; i++) {
            keyboardHtml += '<div class="keyboard__line">';
            let keys = rows.keyEn[i];
            for (let j = 0; j < keys.length; j++) {
                if (keys[j] === 'Backspace' || keys[j] === 'Enter' || keys[j] === 'Shift'|| keys[j] === 'CapsLk') {
                    keyboardHtml += '<div class="keyboard__btn keyboard__btn_l" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                }else if (keys[j] === 'Tab') {
                    keyboardHtml += '<div class="keyboard__btn keyboard__btn_m" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                }else if (keys[j] === ' ') {
                    keyboardHtml += '<div class="keyboard__btn keyboard__btn_xl" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                }else if (keys[j] === 'Ctrl' || keys[j] === 'Alt') {
                    if (j === 0 || j === 1) {
                        keyboardHtml += '<div class="keyboard__btn keyboard__btn_left" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                    } else {
                        keyboardHtml += '<div class="keyboard__btn keyboard__btn_right" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                    }
                }else {
                    keyboardHtml += '<div class="keyboard__btn" data-key="' + keys[j] + '">' + keys[j] + '</div>';
                }
            }
            keyboardHtml += '</div>';
        }
        keyboardHtml += '</div>';
        const main = this.container.querySelector('main');
        main.insertAdjacentHTML('beforeend', keyboardHtml);
    }

    init() {
        window.addEventListener("keydown", (e) => {
            const virtualKey = document.querySelector('[data-key="' + e.key + '"]');
            if (virtualKey) {
                virtualKey.classList.add("active");
            }
        });
        window.addEventListener("keyup", (e) => {
            const virtualKey = document.querySelector('[data-key="' + e.key + '"]');
            if (virtualKey) {
                virtualKey.classList.remove("active");
            }
        });
    }
    
}
window.addEventListener("DOMContentLoaded", function () {
    const keyboard = new Keyboard();
});

