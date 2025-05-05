const name = prompt('Enter your name', 'Vasya');
const age = prompt('Enter your age', '48');
const gender = prompt('Enter your gender', 'Male');
let numbers = prompt('Enter some numbers:)', '12345');
let result = numbers.toString().split('').join(' ');
const str = "Hello World!";
console.log(typeof 123);
console.log(typeof 10n);
console.log(typeof str);
console.log(typeof true);
console.log(typeof null);
console.log(typeof undefined);
console.log(typeof Symbol());
console.log(typeof function () {
});
console.log(result, name, age, gender);