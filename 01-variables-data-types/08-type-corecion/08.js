let x; // Khai báo biến

// Bị ép thành một chuỗi
x = 5 + '5'; // hiển thị ra 55
console.log(x); // ép từ 1 chữ số hay 1 kí tự thành 1 chuỗi

x = 5 + Number('5'); // Hiển thị ra 10
console.log(x);

// Bị ép buộc vào một số
x = 5 * '5'; // Hiển thị ra 25
console.log(x);

// null bị ép về 0 vì nó là giá trị `falsy`
x = 5 + null; // Hiển thị ra 5
x = Number(null);
x = Number(true);
x = Number(false);
console.log(x);

// true bị ép buộc bằng 1
x = 5 + true; // 5 + 1 = 6
console.log(x);

// false bị ép về 0 (falsy)
x = 5 + false; // 5 + 0 = 5
console.log(x);

// Undefined bị ép về 0 (giả)
x = 5 + undefined; // NaN
console.log(x);

console.log(x, typeof x); // NaN 'number'