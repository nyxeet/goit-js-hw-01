// const ADMIN_PASSWORD = 'jqueryismyjam';
// let message;

// const userPassword = prompt('Введите пароль:');
// console.log(userPassword);

// if (userPassword === null) {
//     message = 'Отменено пользователем!';
// } else if(userPassword === ADMIN_PASSWORD) {
//     message = 'Добро пожаловать!';
// } else {
//     message ='Доступ запрещен, неверный пароль!';
// }
// console.log(message);

const passwordInputRef = document.querySelector('input[name="password"]');
const buttonRef3 = document.querySelector('.submit3');
const buttonCancel3 = document.querySelector('.cancel3');
let message;
const ADMIN_PASSWORD = 'jqueryismyjam';

buttonRef3.addEventListener('click', function () {
    console.log('Введено', passwordInputRef.value);
    if (passwordInputRef.value === null) {
    message = 'Отменено пользователем!';
    } else if(passwordInputRef.value === ADMIN_PASSWORD) {
    message = 'Добро пожаловать!';
    } else {
    message ='Доступ запрещен, неверный пароль!';
    }
    console.log(message); 
});
buttonCancel3.addEventListener('click', function () { 
    message = 'Отменено пользователем!';
    console.log(message); 
})