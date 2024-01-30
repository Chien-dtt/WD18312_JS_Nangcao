// Khai báo biến
let x;

// Khai báo mảng
const fruits = ['apple', 'pear', 'orange'];
const berries = ['strawberry', 'blueberry', 'rasberry'];


// Lồng các mảng

// Lồng mảng này vào mảng kia thành 1 mảng mới 2 chiều
fruits.push(berries); // Lồng mảng berries vào trong mảng fruits thành mảng 2 chiều
console.log(fruits); // Hiển thị ['apple', 'pear', 'orange', Array(3)]

// Bây giờ chúng ta có thể truy cập 'blueberry' bằng cách sau
x = fruits[3][1];
console.log(x);

// Tạo một biến mới và lồng cả hai mảng
const allFruits = [fruits, berries]; // Gói gọn 2 mảng vào 1 mảng mới
console.log(allFruits); // Hiển thị [Array(4), Array(3)]  (Array(4) = fruits có 4 phần tử, Array(3) = berries có 3 phân tử)

x = allFruits[1][2]; // Lấy giá trị ở mảng giá trị thứ 1 và phần tử vị trí thứ 2 = rasberry
console.log(x);

// concat() - Nối các mảng
x = fruits.concat(berries); // Gộp các mảng vào làm 1 mảng 1 chiều
console.log(x);

// toán tử trải rộng (...) - Nối với
x = [...fruits, ...berries];
console.log(x);

// flat() - Làm phẳng một mảng
const arr = [1, 2, [3, 4, 5], 6, [7, 8]];
x = arr.flat()  // Chuyển tất cả mảng 2 chiều trở đi trong 1 mảng lớn về mảng 1 chiều
console.log(x); // Hiển thị: [1, 2, 3, 4, 5, 6, 7, 8]



// Các phương thức tĩnh của đối tượng Array

// isArray() - Kiểm tra xem đây có phải là một mảng
x = Array.isArray(fruits); // Kiểm tra xem mảng này có tồn tại hay không (true = có, false = không)
console.log(x);

// from() - Tạo một mảng từ một mảng giống như giá trị
x = Array.from('12345');
console.log(x);

// of() - Tạo một mảng từ một tập hợp các giá trị
const a = 1;
const b = 2;
const c = 3;
x = Array.of(a, b, c); // Khai báo từng giá trị và gộp tất cả giá trị vào thành 1 mảng
console.log(x); // Hiển thị : [1, 2, 3]