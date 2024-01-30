// Khai báo hàm thông thường
// function add(a, b) {
//   return a + b;
// }


// Cú pháp hàm mũi tên
const add = (a, b) => {
    return a + b;
  };
  console.log(add(1, 2));  // Hiển thị : 3


// Trả về ngầm
const subtract = (a, b) => a - b;
console.log(subtract(10, 5)); // Hiển thị : 5

// Có thể bỏ qua () với một tham số duy nhất
const double = (a) => a * 2;
console.log(double(10)); // Hiển thị : 20

// Trả về một đối tượng
const createObj = () => ({
    name: 'Brad',
  });
  
  const numbers = [1, 2, 3, 4, 5];
  
  numbers.forEach(function (n) {
    console.log(n);
  });


  // Hàm mũi tên trong lệnh gọi lại
  numbers.forEach((n) => console.log(n));
  console.log(createObj()); // Hiển thị : {name: 'Brad'}