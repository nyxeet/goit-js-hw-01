const credits = 23570;
const pricePerDroid = 3000;
let totalPrice;

const orderedDroids = prompt('Сколько дроидов хотите купить:');
if (orderedDroids === null) {
    console.log('Отменено пользователем!');
} else if (orderedDroids * pricePerDroid > credits) {
    console.log('Недостаточно средств на счету!');
} else if (orderedDroids * pricePerDroid <= credits) {
    totalPrice = orderedDroids * pricePerDroid;
    console.log(`Вы купили ${orderedDroids} дроидов, на счету осталось ${credits-totalPrice} кредитов.`)
}