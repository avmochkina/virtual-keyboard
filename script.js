//Container
const script = document.querySelector('script');
const container = document.createElement('div');
container.classList.add('container');
script.parentNode.insertBefore(container, script);

//Heading
const header = document.createElement('header');
header.classList.add('header');
const title = document.createElement('h1');
title.classList.add('header__title');
title.innerText = 'RSS Virtual Keyboard';
const subtitle = document. createElement('h2');
subtitle.classList.add('header__subtitle');
subtitle.innerText = 'Keyboard was creating in the Windows OS.';
container.appendChild(header);
header.appendChild(title);
header.appendChild(subtitle);

//Textarea
const main = document.createElement('main');
const textarea = document.createElement('textarea');
textarea.classList.add('textarea-input');
container.appendChild(main);
main.appendChild(textarea);
textarea.focus();
 
//EN-RU Btn
const langBtn = {
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
        ['`','1','2','3','4','5','6','7','8','9','0','-','='],
        ['Tab','q','w','e','r','t','y','u','i','o','p','[',']','\\','Del'],
        ['CapsLk','a','s','d','f','g','h','j','k','l',';','\'','Enter'],
        ['Shift','z','x','c','v','b','n','m',',','.','/','↑','Shift'],
        ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
    ],
    keyEnShift: [
        ['~','!','@','#','$','%','^','&','*','(',')','_','+'],
        ['Tab','Q','W','E','R','T','Y','U','I','O','P','{','}','|','Del'],
        ['CapsLk','A','S','D','F','G','H','J','K','L',':','"','Enter'],
        ['Shift','Z','X','C','V','B','N','M','<','>','?','↑','Shift'],
        ['Ctrl','Alt',' ','Alt','←','↓','→','Ctrl'],
    ]
}
//Keyboard
function createKeyboard(langBtn,) {
    let keyboardHtml = '<div class="keyboard">';
    const rows = langBtn.keyRu.length;
    for (let i = 0; i < rows; i++) {
        keyboardHtml += '<div class="keyboard__line">';
        let keys = langBtn.keyRu[i];
        for (let j = 0; j < keys.length; j++) {
            if (keys[j] === 'Backspace' || keys[j] === 'Enter' || keys[j] === 'Shift'|| keys[j] === 'CapsLk') {
                keyboardHtml += '<div class="keyboard__btn keyboard__btn_l" data-key="' + keys[j] + '">' + keys[j] + '</div>';
            }else if (keys[j] === 'Tab') {
                keyboardHtml += '<div class="keyboard__btn keyboard__btn_m" data-key="' + keys[j] + '">' + keys[j] + '</div>';
            }else if (keys[j] === ' ') {
                keyboardHtml += '<div class="keyboard__btn keyboard__btn_xl" data-key="' + keys[j] + '">' + keys[j] + '</div>';;
            }else {
                keyboardHtml += '<div class="keyboard__btn" data-key="' + keys[j] + '">' + keys[j] + '</div>';

            }
        }
        keyboardHtml += '</div>';
    }
    keyboardHtml += '</div>';
    main.insertAdjacentHTML('beforeend', keyboardHtml);
}
createKeyboard(langBtn)
init()
function init() {

    textarea.focus();
    
    textarea.addEventListener('keydown', function(e) {
        console.log(e.key)
        const element = document.querySelector('[data-key="' + e.key + '"]');

        if(element) {
            element.classList.add('hint');
        }})
    
        const currentLetter = getCurrentLetter()
    /*    
        if(e.key === currentLetter.label) {
            letterId = letterId + 1;
            update()
        }else {
            e.preventDefault();
        }
        if(currentLineNumber !== getCurrentLineNumber()) {
            inputElement.value = '';
            e.preventDefault();
        }
    })
    
    textarea.addEventListener('keyup', function(e) {
        const element = document.querySelector('[data-key="' + e.key + '"]');
        element.classList.remove('hint');
    })
*/
}

function getCurrentLetter() {

}
