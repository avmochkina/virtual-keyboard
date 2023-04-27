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

//Keyboard
const keyboardHtml = 
    `<div class="keyboard">
        <div class="keyboard__line">
            <div class="keyboard__btn" data-key="">Ё</div>
            <div class="keyboard__btn" data-key="1">1</div>
            <div class="keyboard__btn" data-key="2">2</div>
            <div class="keyboard__btn" data-key="3">3</div>
            <div class="keyboard__btn" data-key="4">4</div>
            <div class="keyboard__btn" data-key="5">5</div>
            <div class="keyboard__btn" data-key="6">6</div>
            <div class="keyboard__btn" data-key="7">7</div>
            <div class="keyboard__btn" data-key="8">8</div>
            <div class="keyboard__btn" data-key="9">9</div>
            <div class="keyboard__btn" data-key="0">0</div>
            <div class="keyboard__btn" data-key="-">-</div>
            <div class="keyboard__btn" data-key="+">+</div>
            <div class="keyboard__btn keyboard__btn_l" data-key="Backspace">Backspace</div>
        </div>
        <div class="keyboard__line">
            <div class="keyboard__btn keyboard__btn_m" data-key="Tab">Tab</div>
            <div class="keyboard__btn" data-key="й">Й</div>
            <div class="keyboard__btn" data-key="ц">Ц</div>
            <div class="keyboard__btn" data-key="у">У</div>
            <div class="keyboard__btn" data-key="к">К</div>
            <div class="keyboard__btn" data-key="е">Е</div>
            <div class="keyboard__btn" data-key="н">Н</div>
            <div class="keyboard__btn" data-key="г">Г</div>
            <div class="keyboard__btn" data-key="ш">Ш</div>
            <div class="keyboard__btn" data-key="щ">Щ</div>
            <div class="keyboard__btn" data-key="з">З</div>
            <div class="keyboard__btn" data-key="х">Х</div>
            <div class="keyboard__btn" data-key="ъ">Ъ</div>
            <div class="keyboard__btn" data-key="\\">\\</div>
            <div class="keyboard__btn" data-key="\\">Del</div>
        </div>
        <div class="keyboard__line">
            <div class="keyboard__btn keyboard__btn_l" data-key="CapsLock">CapsLock</div>
            <div class="keyboard__btn" data-key="ф">Ф</div>
            <div class="keyboard__btn" data-key="ы">Ы</div>
            <div class="keyboard__btn" data-key="в">В</div>
            <div class="keyboard__btn" data-key="а">А</div>
            <div class="keyboard__btn" data-key="п">П</div>
            <div class="keyboard__btn" data-key="р">Р</div>
            <div class="keyboard__btn" data-key="о">О</div>
            <div class="keyboard__btn" data-key="л">Л</div>
            <div class="keyboard__btn" data-key="д">Д</div>
            <div class="keyboard__btn" data-key="ж">Ж</div>
            <div class="keyboard__btn" data-key="э">Э</div>
            <div class="keyboard__btn keyboard__btn_l" data-key="">Enter</div>
        </div>
        <div class="keyboard__line">
            <div class="keyboard__btn keyboard__btn_l" data-key="Shift">Shift</div>
            <div class="keyboard__btn" data-key="я">Я</div>
            <div class="keyboard__btn" data-key="ч">Ч</div>
            <div class="keyboard__btn" data-key="с">С</div>
            <div class="keyboard__btn" data-key="м">М</div>
            <div class="keyboard__btn" data-key="и">И</div>
            <div class="keyboard__btn" data-key="т">Т</div>
            <div class="keyboard__btn" data-key="ь">Ь</div>
            <div class="keyboard__btn" data-key="б">Б</div>
            <div class="keyboard__btn" data-key="ю">Ю</div>
            <div class="keyboard__btn" data-key=".">.</div>
            <div class="keyboard__btn" data-key=""><span class="material-symbols-outlined">
            arrow_upward
            </span></div>
            <div class="keyboard__btn keyboard__btn_l" data-key="Shift">Shift</div>
        </div>
        <div class="keyboard__line keyboard__line_short">
            <div class="keyboard__btn" data-key="Ctrl">Ctrl</div>
            <div class="keyboard__btn" data-key="Alt">Alt</div>
            <div class="keyboard__btn keyboard__btn_xl" data-key=" "></div>
            <div class="keyboard__btn" data-key="Alt">Alt</div>
            <div class="keyboard__btn" data-key="Ctrl">Ctrl</div>
            <div class="keyboard__btn" data-key=""><span class="material-symbols-outlined">
            arrow_back
            </span></div>
            <div class="keyboard__btn" data-key=""><span class="material-symbols-outlined">
            arrow_downward
            </span></div>
            <div class="keyboard__btn" data-key=""><span class="material-symbols-outlined">
            arrow_right_alt
            </span></div>
        </div>
    </div>`
main.insertAdjacentHTML('beforeend', keyboardHtml);


