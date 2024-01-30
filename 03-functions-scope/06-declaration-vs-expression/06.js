// Khai báo hàm
function addDollarSign(value) {
    return '$' + value;
  }

  // Khi sử dụng khai báo, bạn có thể gọi hàm trước khi khai báo. Với biểu thức, bạn không thể
  console.log(addDollarSign(100)); // Hiển thị : $100

  // Biểu thức hàm
  const addPlusSign = function (value) {
    return '+' + value;
  };
  
  console.log(addPlusSign(200)); // Hiển thị : +200