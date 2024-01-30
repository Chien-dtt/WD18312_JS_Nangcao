// Khai báo biến

// Tạo một đối tượng
const person = {
    name: 'John Doe',
    age: 30,
    isAdmin: true,
    address: {
        street: '123 Main st',
        city: 'Boston',
        state: 'MA',
    },
    hobbies: ['music', 'sports'],
};
console.log(person); // Hiển thị : {name: 'John Doe', age: 30, isAdmin: true, address: {…}, hobbies: Array(2)}

// Truy cập thuộc tính đối tượng
x = person.name; // Ký hiệu dấu chấm
x = person['age']; // Ký hiệu khung
x = person.address.state;
x = person.hobbies[0];
console.log(x);  // Các cách truy xuất phần tử khác nhau



// Cập nhật thuộc tính
person.name = 'Jane Doe';
person['isAdmin'] = false;

// Xóa thuộc tính
delete person.age;

// Tạo thuộc tính mới
person.hasChildren = true;

// Thêm hàm
person.greet = function () {
    console.log(`Hello, my name is ${this.name}`);
  };
  
  person.greet();


  // Tên có nhiều từ
  const person2 = {
    'first name': 'Brad',
    'last name': 'Traversy',
  };
  
  x = person2['first name'];
  
  console.log(x);