// Khai báo biến
let x;
const name = 'John';
const age = 31;

// Nối chuỗi
x = 'Hello, my name is ' + name + ' and I am ' + age + ' years old';
console.log(x);

// Mẫu chữ
x = `Hello, my name is ${name} and I am ${age} years old`;
console.log(x);


// ===================Thuộc tính và phương thức chuỗi===========================

// Tạo một "đối tượng chuỗi" (JS tự động thực hiện việc này khi sử dụng thuộc tính hoặc phương thức trên chuỗi nguyên thủy)
const s = new String('Hello World');
x = typeof s;
console.log(s);
x = s.length; // Số kí tự có trong giá trị
console.log(x);


// Truy cập giá trị bằng key
x = s[0]; // Hiển thị ra H
console.log(x);

// Hiển thị nguyên mẫu của đối tượng chuỗi. Hiển thị các thuộc tính và phương thức
x = s.__proto__; // Hiên thị: String {'', constructor: ƒ, anchor: ƒ, at: ƒ, big: ƒ, …}
console.log(x);

// Thay đổi trường hợp
x = s.toUpperCase(); // In hoa tất cả các kí tự
x = s.toLowerCase(); // In thường tất cả các kí tự

// charAt() - trả về ký tự tại chỉ mục đã chỉ định
x = s.charAt(0);
console.log(x);

// indexOf - trả về chỉ mục của lần xuất hiện đầu tiên của một giá trị được chỉ định trong chuỗi
x = s.indexOf('d'); // Hiển thị ra 10
console.log(x);

// substring() - tìm kiếm một chuỗi cho một giá trị được chỉ định
x = s.substring(2, 5); // Lấy giá trị từ phần tử thứ 2 và kết thúc ở vị trí thứ 5
console.log(x);
x = s.substring(7); // Lấy giá trị từ phần tử thứ 7 trở đi
console.log(x);

// slice() - trích xuất một phần của chuỗi và trả về một chuỗi mới
x = s.slice(-11, -6); // Trích xuất phần tử giá trị tính từ trái qua phải (giá trị 1 bắt đầu từ cuối phần tử) . Lấy -11 kết thúc = -6 => Hello
console.log(x);

// Trim() - xóa khoảng trắng ở đầu và cuối chuỗi
x = '         Hello World';
x = x.trim(); // Xóa phân tử rỗng của chuỗi ở 2 đầu  
console.log(x);

// thay thế() - thay thế tất cả các phiên bản của một chuỗi
x = s.replace('World', 'John'); // Thay thế toàn bộ phân tử thành 1 chuỗi mới world => John ( Hello John )
console.log(x);

// bao gồm() - trả về true nếu tìm thấy chuỗi
x = s.includes('Hell'); // Tìm phần tử (true = có tồn tại; false = không tồn tại)
console.log(x);

// valueOf() - trả về giá trị nguyên thủy của một biến
x = s.valueOf(); // Trả về chuỗi phân tử về như ban đầu
console.log(x);

// tách() - trả về một mảng chuỗi
x = s.split(''); // Hiển thị mảng các kí tự được gán ((11) ['H', 'e', 'l', 'l', 'o', ' ', 'W', 'o', 'r', 'l', 'd'])
console.log(x);