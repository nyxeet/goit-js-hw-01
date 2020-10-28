let input;
let total = 0;

while (input !== null) {
    input = prompt('Введите число');
    total = total + Number(input);
}
console.log(`Общая сумма чисел равна ${total}`);

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
