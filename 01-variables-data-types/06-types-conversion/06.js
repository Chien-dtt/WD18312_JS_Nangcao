let amount = 'hello';

// Chuyển chuỗi thành số
amount = parseInt(amount);
amount = +amount;
amount = Number(amount);


// Chuyển số thành chuỗi
amount = amount.toString();
amount = String(amount);


// Chuyển chuỗi thành số thập phân
amount = parseFloat(amount);


// Convert number to boolean
amount = Boolean(amount);


// Các cách lấy NaN
console.log(Math.sqrt(-1));
console.log(1 + NaN);
console.log(undefined + undefined);
console.log('foo' / 3);

console.log(amount, typeof amount);