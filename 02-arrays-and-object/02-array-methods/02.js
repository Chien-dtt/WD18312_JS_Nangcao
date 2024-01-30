// Khai báo biến
let x;

const arr = [28, 38, 44, 29, 109]; // Khai báo mảng
console.log(arr);

// push() - Đẩy một giá trị vào cuối mảng
arr.push(100); // Đẩy giá trị 100 vào cuối mảng arr
console.log(arr);

// pop() - Bỏ giá trị cuối cùng
arr.pop(); // Xóa phẩn tử ở cuối mảng
console.log(arr);

// unshift() - Thêm giá trị vào đầu mảng
arr.unshift(5); // Thêm phần tử số 5 vào đầu mảng arr
console.log(arr);

// shift() - Xóa giá trị đầu tiên
arr.shift(); // Xóa phân tử ở đầu mảng
console.log(arr);

// Reverse() - Đảo ngược một mảng
arr.reverse(); // Đảo ngược tất cả các c=vị trí phần tử có trong mảng
console.log(arr);

// bao gồm() - Kiểm tra xem có giá trị đó có trong mảng không (Có = true, Không = false)
x = arr.includes(445);
console.log(x);

// indexOf() - Trả về chỉ mục của kết quả khớp đầu tiên
x = arr.indexOf(28);  // Hiển thị số lần giá trị 28 được hiển thị ở đầu tiên
console.log(x);

// Trả về mảng dưới dạng chuỗi
x = arr.toString();
x = arr.join();
console.log(x);

// slice() trả về các phần tử đã chọn trong một mảng, dưới dạng một mảng mới. Slice lấy chỉ mục của phần tử đầu tiên và chỉ mục của phần tử cuối cùng được đưa vào mảng mới.
x = arr.slice(1, 4);
console.log(x);

// splice() hoạt động giống như slice() ngoại trừ việc nó lấy chỉ mục của phần tử đầu tiên và số phần tử sau đó làm đối số thứ hai. nó cũng làm thay đổi mảng ban đầu trong đó slice() không
x = arr.splice(1, 4);
console.log(x);

// Xóa một phần tử/giá trị - Phần sau đây sẽ thay đổi mảng ban đầu bằng cách loại bỏ phần tử có chỉ số là 4. x sẽ bằng một mảng mới có giá trị được lấy ra đó
x = arr.splice(4, 1);
console.log(x);

// Phương thức xâu chuỗi - Một số phương thức có thể được xâu chuỗi tùy thuộc vào giá trị trả về.
x = arr.slice(1, 4).reverse().toString().charAt(0);
console.log(x);