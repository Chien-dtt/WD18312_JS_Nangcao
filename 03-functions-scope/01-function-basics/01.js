// Định nghĩa một hàm
function sayHello() {
    console.log('Hello World');
  }

  // Gọi, thực thi hoặc gọi một hàm
  sayHello();



  // Định nghĩa hàm có tham số
  function add(num1, num2) {
    console.log(num1 + num2);
  }
// Gọi hàm có đối số
add(5, 10); // 5 + 10 = 15




// Tham số và đối số
// Tham số là tên của các biến được sử dụng để truyền dữ liệu vào hàm.
// Đối số là các giá trị được truyền vào hàm


// Trả về một giá trị
function subtract(num1, num2) {
    return num1 - num2;
  
    console.log('After the return');
  }
  // Gán giá trị trả về cho một biến
  const result = subtract(10, 2);

console.log(result, subtract(20, 5)); // Hiển thị kết quả : 8 15