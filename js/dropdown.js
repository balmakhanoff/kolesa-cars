const menu_item = document.querySelector('.menu-item');
const submenu = document.querySelectorAll('.submenu')

menu_item.addEventListener('mouseenter', function () {
    submenu.forEach(element => {
        element.style.visibility = 'visible';
        element.style.opacity = '1';
    })
});

menu_item.addEventListener('mouseleave', function () {
    submenu.forEach(element => {
        element.style.visibility = 'hidden';
        element.style.opacity = '0';
    })
});