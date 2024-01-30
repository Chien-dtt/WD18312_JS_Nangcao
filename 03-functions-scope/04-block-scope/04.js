// Khai báo biến
const x = 100;

// Câu lệnh If là một khối
if (true) {
    console.log(x);
    const y = 200;
    console.log(x + y);
  }

 // console.log(y); // ReferenceError: y không được xác định


 // Vòng lặp là một khối
 for (let i = 0; i <= 10; i++) {
    console.log(i);
  }
  // console.log(i); // ReferenceError: tôi không được xác định


  // Sử dụng var
  if (true) {
    const a = 500;
    let b = 600;
    var c = 700;
  }
  console.log(c); // Hiển thị : 700


  // var IS có phạm vi chức năng
  function run() {
    var d = 100;
    console.log(d);
  }
  
  run();
  // console.log(d); // Không xác định


  const foo = 1;
var bar = 2; // Đặt đối tượng cửa sổ