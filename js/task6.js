// let input;
// let total = 0;

// while (input !== null) {
//     input = prompt('Введите число');
//     total = total + Number(input);
// }
// console.log(`Общая сумма чисел равна ${total}`);

let total = 0;
const numberInput = document.querySelector('input[name="number6"]');
const buttonRef6 = document.querySelector('.submit6');
const buttonCancel6 = document.querySelector('.cancel6');
const alternative6 = document.querySelector('.alternative6');
buttonRef6.addEventListener('click', function () {
    console.log(numberInput.value);
    total = total + Number(numberInput.value);
    console.log('Введите следующее число!');
});
buttonCancel6.addEventListener('click', function () {
    console.log('Конец');
    console.log(`Общая сумма чисел равна ${total}`);
    total = 0;
});
alternative6.addEventListener('click', function () {
    let input;
    while (input !== null) {
        input = prompt('Введите число');
        total = total + Number(input);
        console.log(input);
        console.log('Введите следующее число!');
    } 
    console.log(`Общая сумма чисел равна ${total}`);
    total = 0;
});


// let total = 0;
// while (true){
//     let input = prompt('Введите число');
//     if (input === null) {
//         break;
//     }
//     input = Number(input);
//     total += input;
// }
// console.log(`Общая сумма чисел равна ${total}`);
