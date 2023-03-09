const modal = document.querySelector('.modal');
const modalWindowClose = document.querySelector('.modal__close');
const modalWindowOpen = document.querySelector('.place_ad');

modalWindowOpen.addEventListener('click', function() {
    modal.style.display = 'flex';
}); 

modalWindowClose.addEventListener('click', function() {
    modal.style.display = 'none';
})






