const form = document.querySelector('.form');
let carsArray = [];

form.addEventListener('submit', (event) => {
    event.preventDefault();

    let car_photo = form.elements.car_photo.value.trim(),
        car_name = form.elements.car_name.value.trim(),
        year_auto = form.elements.year_auto.value.trim(),
        mileage = form.elements.mileage.value.trim(),
        gear = form.elements.gear.value.trim(),
        car_color = form.elements.car_color.value.trim(),
        car_price = form.elements.car_price.value.trim();

    addCarItem(car_photo, car_name, year_auto, mileage, gear, car_color, car_price);
})


function addCarItem(car_photo, car_name, year_auto, mileage, gear, car_color, car_price) {

    let carItem = {
        img: car_photo,
        carName: car_name,
        year: year_auto,
        mileage: mileage,
        gear: gear,
        color: car_color,
        price: car_price,
        id: Date.now(),
        done: false
    }

    carsArray.push(carItem);
    renderItem(carItem);
};




function renderItem(newCarItem) {

    let carCard = document.createElement('div');
    carCard.classList.add('car_card')

    carCard.innerHTML = `
        <img src="${newCarItem.img}" alt="car">
        <h3>${newCarItem.carName}</h3>
        <div><b>Год выпуска: </b>${newCarItem.year}</div>
        <div><b>Пробег: </b>${newCarItem.mileage} км.</div>
        <div><b>Коробка: </b>${newCarItem.gear}</div>
        <div><b>Цвет: </b>${newCarItem.color}</div>
        <div><b>Цена: </b>${newCarItem.price} тг.</div>
        <button><svg xmlns="http://www.w3.org/2000/svg" height="48" viewBox="0 96 960 960" width="48"><path d="m336 762 144-144 144 144 42-42-144-144 144-144-42-42-144 144-144-144-42 42 144 144-144 144 42 42ZM180 936q-24 0-42-18t-18-42V276q0-24 18-42t42-18h600q24 0 42 18t18 42v600q0 24-18 42t-42 18H180Zm0-60h600V276H180v600Zm0-600v600-600Z"/></svg></button>        
    `
    document.querySelector('.cars_cards').appendChild(carCard)
    modal.style.display = 'none';
    document.querySelector('.form').reset();
    localStorage.setItem('carsArray', JSON.stringify(carsArray));
}




document.addEventListener('DOMContentLoaded', function () {
    if (localStorage.getItem('carsArray') !== null) {
        let items = localStorage.getItem('carsArray');

        carsArray = JSON.parse(items);
        for (let i = 0; i < carsArray.length; i++) {
            renderItem(carsArray[i]);
        }
    }
})









