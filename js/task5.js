// let cost;
// let userCountry = prompt('В какую страну везти товар:').toLowerCase();

// switch (userCountry) {
//     case 'китай':
//         cost = 100;
//         console.log(`Доставка в Китай будет стоить ${cost} кредитов`)
//     break;
//     case 'чили':
//         cost = 250;
//         console.log(`Доставка в Чили будет стоить ${cost} кредитов`)
//     break;
//     case 'австралия':
//         cost = 170;
//         console.log(`Доставка в Австралию будет стоить ${cost} кредитов`)
//     break;
//     case 'индия':
//         cost = 80;
//         console.log(`Доставка в Индию будет стоить ${cost} кредитов`)
//     break;
//     case 'ямайка':
//         cost = 120;
//         console.log(`Доставка в Ямайку будет стоить ${cost} кредитов`)
//     break;
//     default:
//         console.log('В вашей стране доставка не доступна');
// }
let cost;
const userCountry = document.querySelector('input[name="country"]');
const buttonRef5 = document.querySelector('.submit5');
const buttonCancel5 = document.querySelector('.cancel5');
buttonRef5.addEventListener('click', function () {
    switch (userCountry.value.toLowerCase()) {
    case 'китай':
        cost = 100;
        console.log(`Доставка в Китай будет стоить ${cost} кредитов`)
    break;
    case 'чили':
        cost = 250;
        console.log(`Доставка в Чили будет стоить ${cost} кредитов`)
    break;
    case 'австралия':
        cost = 170;
        console.log(`Доставка в Австралию будет стоить ${cost} кредитов`)
    break;
    case 'индия':
        cost = 80;
        console.log(`Доставка в Индию будет стоить ${cost} кредитов`)
    break;
    case 'ямайка':
        cost = 120;
        console.log(`Доставка в Ямайку будет стоить ${cost} кредитов`)
    break;
    default:
        console.log('В вашей стране доставка не доступна');
}
    
});
buttonCancel5.addEventListener('click', function () { 
    console.log('Отменено пользователем!');
})