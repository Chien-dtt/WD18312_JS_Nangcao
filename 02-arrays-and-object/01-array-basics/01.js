// Khai báo biến
let x;

// Mảng theo nghĩa đen (mảng hiện ra theo chuỗi hàng ngang)
const numbers = [12, 45, 33, 29, 39, 102];
const mixed = [12, 'Hello', true, null];
console.log(numbers, mixed);

// Hàm tạo mảng
const fruits = new Array('apple', 'grape', 'orange');
console.log(fruits);

// Lấy giá trị theo vị trí phần tử của mảng
x = numbers[3]; // vị trí số 3 là 29 của mảng number
console.log(x);

x = numbers[0] + numbers[3]; // 12 + 29 = 41
console.log(x);

x = `My favorite fruit is an ${fruits[2]}`; // My favorite fruit is an orange
console.log(x); 

x = numbers.length; // Độ dài của mảng
console.log(x);

fruits[2] = 'pear'; // Thay đổi giá trị của mảng
console.log(fruits);

// độ dài không chỉ đọc
// fruits.length = 2;

fruits[3] = 'strawberry'; // Thêm phần tử số 3 tên strawberry vào mảng
console.log(fruits);

// Sử dụng độ dài làm chỉ mục sẽ luôn thêm vào cuối 
fruits[fruits.length] = 'blueberry'; // Thêm vào cuối mảng
fruits[fruits.length] = 'peach';
console.log(fruits);

