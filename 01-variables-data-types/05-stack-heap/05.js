// Giá trị được lưu vào ngăn xếp (STACK)
const name = 'John';
const age = 30;
console.log(name, age)

// Tham chiếu được lưu trong heap (HEAP)
const person = {
    name: 'Brad',
    age: 40,
};
console.log(person);


// Chỉnh sửa giá trị được lưu trong STACK
let newName = name;
newName = 'Jonathan';
console.log(newName);


// Chỉnh sửa giá trị được lưu trong HEAP
let newPerson = person;
newPerson.name = 'Bradley';
console.log(newPerson);


console.log(name, newName); // John, Jonathan
console.log(person, newPerson); // { name: 'Bradley', age: 40 }, { name: 'Bradley', age: 40 }