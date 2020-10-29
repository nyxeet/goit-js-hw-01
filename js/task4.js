// const credits = 23570;
// const pricePerDroid = 3000;
// let totalPrice;

// const orderedDroids = prompt('Сколько дроидов хотите купить:');
// if (orderedDroids === null) {
//     console.log('Отменено пользователем!');
// } else if (orderedDroids * pricePerDroid > credits) {
//     console.log('Недостаточно средств на счету!');
// } else if (orderedDroids * pricePerDroid <= credits) {
//     totalPrice = orderedDroids * pricePerDroid;
//     console.log(`Вы купили ${orderedDroids} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
// }

const credits = 23570;
const pricePerDroid = 3000;
let totalPrice;

const orderedDroids = document.querySelector('input[name="droids"]');
const buttonRef4 = document.querySelector('.submit4');
const buttonCancel4 = document.querySelector('.cancel4');

buttonRef4.addEventListener('click', function () {
    console.log('Вы заказали', orderedDroids.value);
    if (orderedDroids.value == 0 ) {
        console.log('Вы не купили дроидов :(');
    }
    else if (orderedDroids.value * pricePerDroid > credits) {
        console.log('Недостаточно средств на счету!');
    }
    else if (orderedDroids.value * pricePerDroid <= credits) {
        totalPrice = orderedDroids.value * pricePerDroid;
        console.log(`Вы купили ${orderedDroids.value} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
    }
});
buttonCancel4.addEventListener('click', function () { 
    console.log('Отменено пользователем!');
})