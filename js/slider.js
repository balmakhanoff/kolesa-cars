// КНОПКИ
const sliderBtn_1 = document.querySelector('#slider_btn1');
const sliderBtn_2 = document.querySelector('#slider_btn2');
const sliderBtn_3 = document.querySelector('#slider_btn3');
const sliderLeftBtn = document.getElementById('slider_left_btn');
const sliderRightBtn = document.getElementById('slider_right_btn');

// SVG РИСУНКИ НИЖНИХ КНОПОК
const BtnCheched = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 33.3q3.9 0 6.6-2.7 2.7-2.7 2.7-6.6 0-3.9-2.7-6.6-2.7-2.7-6.6-2.7-3.9 0-6.6 2.7-2.7 2.7-2.7 6.6 0 3.9 2.7 6.6 2.7 2.7 6.6 2.7ZM24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';
const BtnUnchecked = '<svg xmlns="http://www.w3.org/2000/svg" height="48" width="48"><path d="M24 44q-4.1 0-7.75-1.575-3.65-1.575-6.375-4.3-2.725-2.725-4.3-6.375Q4 28.1 4 24q0-4.15 1.575-7.8 1.575-3.65 4.3-6.35 2.725-2.7 6.375-4.275Q19.9 4 24 4q4.15 0 7.8 1.575 3.65 1.575 6.35 4.275 2.7 2.7 4.275 6.35Q44 19.85 44 24q0 4.1-1.575 7.75-1.575 3.65-4.275 6.375t-6.35 4.3Q28.15 44 24 44Zm0-3q7.1 0 12.05-4.975Q41 31.05 41 24q0-7.1-4.95-12.05Q31.1 7 24 7q-7.05 0-12.025 4.95Q7 16.9 7 24q0 7.05 4.975 12.025Q16.95 41 24 41Zm0-17Z"/></svg>';

// МАССИВ ИЗ КАРТИНОК
const slider_images = ['https://photos-kl.kcdn.kz/kolesa-read/2020/05/29/35a4248de32069ac494b9d94347597f4810346ed-1193x671.jpg', 'https://i.ytimg.com/vi/cttOOjcVogw/maxresdefault.jpg', 'https://i.ytimg.com/vi/gx6bOYhVXoA/maxresdefault.jpg']

// IMG КОНТЕЙНЕР ДЛЯ ИЗОБРАЖЕНИЯ СЛАЙДЕРА
let sliderImg = document.querySelector('#slider_img');

// КОЛЛЕКЦИЯ ИЗ НИЖНИХ ТРЕХ КНОПОК
let sliderBtns = document.querySelectorAll('.slider_btn');

let sliderIndex = 0;
sliderImg.src = slider_images[sliderIndex];

// НИЖНИЕ КНОПКИ
for (let i = 0; i < sliderBtns.length; i++) {
    sliderBtns[i].addEventListener('click', function (e) {
        e.preventDefault();

        if (sliderBtns[i] == sliderBtn_1) {
            sliderImg.src = slider_images[0];
            sliderBtns[i].innerHTML = BtnCheched;
            sliderBtn_2.innerHTML = sliderBtn_3.innerHTML = BtnUnchecked;
        }
        else if (sliderBtns[i] == sliderBtn_2) {
            sliderImg.src = slider_images[1];
            sliderBtns[i].innerHTML = BtnCheched;
            sliderBtn_1.innerHTML = sliderBtn_3.innerHTML = BtnUnchecked;
        }
        else if (sliderBtns[i] == sliderBtn_3) {
            sliderImg.src = slider_images[2];
            sliderBtns[i].innerHTML = BtnCheched;
            sliderBtn_1.innerHTML = sliderBtn_2.innerHTML = BtnUnchecked;
        }
    })
}

// БОКОВЫЕ КНОПКИ
sliderRightBtn.addEventListener('click', function () {
    sliderIndex++;
    if (sliderIndex == 3) {
        sliderIndex = 0;
    }
    sliderImg.src = slider_images[sliderIndex];
    radioInputRender();
})

sliderLeftBtn.addEventListener('click', function () {
    sliderIndex--;
    if (sliderIndex == -1) {
        sliderIndex = 2;
    }
    sliderImg.src = slider_images[sliderIndex];
    radioInputRender();
})

// ОТРИСОВКА НИЖНИХ КНОПОК ПРИ ПЕРЕМЕЩЕНИЙ БОКОВЫХ КНОПОК
function radioInputRender() {
    if (sliderIndex == 0) {
        sliderImg.src = slider_images[0];
        sliderBtn_1.innerHTML = BtnCheched;
        sliderBtn_2.innerHTML = sliderBtn_3.innerHTML = BtnUnchecked;
    } else if (sliderIndex == 1) {
        sliderImg.src = slider_images[1];
        sliderBtn_2.innerHTML = BtnCheched;
        sliderBtn_1.innerHTML = sliderBtn_3.innerHTML = BtnUnchecked;
    } else if (sliderIndex == 2) {
        sliderImg.src = slider_images[2];
        sliderBtn_3.innerHTML = BtnCheched;
        sliderBtn_1.innerHTML = sliderBtn_2.innerHTML = BtnUnchecked;
    }
}
