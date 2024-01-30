// 'window' is globally scoped
// alert('Hello');
// console.log(innerWidth);


// Biến phạm vi toàn cục
const x = 100;
console.log(x, 'in global'); // Hiển thị : 100 'in global'



function run() {
    // Access global vars in functions
    console.log(window.innerHeight); // Hiển thị : 150
    console.log(x, 'in function'); // Hiển thị : 100 'in function'
  }
  
  run();



  // Truy cập các vars toàn cục theo khối
  if (true) {
    console.log(x, 'in block'); // Hiển thị : 100 'in block'
  }


  function add() {
    // Ghi đè x toàn cục (làm mờ biến)
    const x = 1;
    const y = 50;
    console.log(x + y);
  }


  // Không thể truy cập biến phạm vi hàm trong phạm vi toàn cục
  console.log(y); // Báo lỗi k thể truy cập
add();