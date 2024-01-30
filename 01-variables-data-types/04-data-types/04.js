// String
const firstName = 'Sara';
console.log(firstName);

// Number
const age = 30;
const temp = 98.9;
console.log(age, temp)

// Boolean
const hasKids = true;
console.log(hasKids);

// Null
const aptNumber = null;
console.log(aptNumber);

// Undefined
// let score;
const score = undefined;
console.log(score);

// Symbol
const id = Symbol('id');
console.log(id);

// BigInt
const n = 9007199254740991n;
console.log(n);

// Các loại tham chiếu
const numbers = [1, 2, 3, 4];
console.log(numbers);

const person = {
    name: 'Brad',
};
console.log(person);

function sayHello() { // Khai báo tham chiếu funcion
    console.log('Hello');
}
const output = sayHello;
console.log(output, typeof output);