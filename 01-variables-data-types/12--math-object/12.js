// Khai báo biến
let x;

// Tính Căn bậc hai
x = Math.sqrt(9); // Căn bậc 2 của 9 = 3
console.log(x);

// Giá trị tuyệt đối
x = Math.abs(-5); // Giá trị tuyệt đối cảu (-5) = 5
console.log(x);

// Làm tròn số thập phân theo số đếm sau dấu phẩy
x = Math.round(4.2); 
console.log(x);

// Làm tròn lên
x = Math.ceil(4.2); // Kết quả = 5
console.log(x);

// Làm tròn xuống
x = Math.floor(4.9); // Kết quả = 4
console.log(x);

// Tính số mũ
x = Math.pow(2, 3); // 2 mũ 3 = 8
console.log(x);

// Chọn số tối thiểu
x = Math.min(9,5,8); // Chọn ra số nhỏ nhất trong 3 số (9, 5, 8) = 5
console.log(x);

// Chọn số tối đa
x = Math.max(4, 5, 3); //Chọn ra số lớn nhất trong 3 số (4, 5, 3) = 5
console.log(x);

// Lấy số/số thập phân ngẫu nhiên trong khoảng từ 0 đến 1 (reset sẽ random số mới)
x = Math.random();
console.log(x);

// Lấy một số ngẫu nhiên từ 1 đến 100 (reset sẽ random số mới)
x = Math.floor(Math.random() * 100 + 1);
console.log(x);