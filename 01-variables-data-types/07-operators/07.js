//============================ 1. Toán tử số học===================================

let x; // Gọi biến giá trị số học
x = 5 + 5; // 5 + 5 = 10
x = 5 - 5; // 5 - 5 = 0
x = 5 * 5; // 5 * 5 = 25
x = 5 / 5; // 5 / 5 = 1
x = 7 % 5; // 7 % 5 = 2
console.log(x);


// Phép nối giá trị hoặc kí tự
x = 'Hello' + ' My ' + 'World';
console.log(x);

// số mũ
x = 2 ** 3; // 2 mũ 3 = 8
console.log(x);

// Tăng giá trị tương tự như trong code C đã học với biến x++
x = 3;
x++; // 3 + 1 = 4
console.log(x);

// Giảm giá trị tương tự như trong code C đã học với biến x--
// x = x - 1;
x = 10;
x--; // 10 - 1 = 9
console.log(x);




//========================== 2. Toán tử gán========================================

x = 10; // Gán giá trị cho biến
x += 5; // x = 10 + 5 = 15
x -= 5; // x = 10 - 5 = 5
x *= 5; // x = 10 * 5 = 50
x /= 5; // x = 10 / 5 = 2
x %= 5; // x = 10 % 5 = 0
x **= 5; // 10 mũ 5 = 100000
console.log(x);




//==========================  3. Toán tử so sánh==================================

// Só sánh Bằng (Chỉ giá trị, không phải loại) Đúng = true, Sai = False
x = 2 == '2';
console.log(x);

// Không bằng (Chỉ giá trị, không phải loại)
x = 2 != '2';
console.log(x);

// Không bằng (Loại và giá trị)
x = 2 !== 2;

// Lớn hơn và nhỏ hơn ( Só sánh đúng trả về true, sai trả về false )
x = 10 > 5;
x = 10 < 5;
x = 10 <= 5;
x = 10 >= 5;
console.log(x);