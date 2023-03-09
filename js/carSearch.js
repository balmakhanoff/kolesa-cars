const inputCarSearch = document.getElementById('car_search_input');

inputCarSearch.oninput = function () {
    let value = this.value.trim();
    let carItems = document.querySelectorAll('.car_card');
    let carH3 = document.querySelectorAll('.car_card h3')
    if (value != '') {
        for (let i = 0; i < carH3.length; i++) {
            if (carH3[i].innerText.search(value) == -1) {
                carItems[i].classList.add('hide');
            } else {
                carItems[i].classList.remove('hide');
            }
        }
    } else {
        for (let i = 0; i < carH3.length; i++) {
            carItems[i].classList.remove('hide');
        }
    }
}

