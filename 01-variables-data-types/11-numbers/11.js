 // Khai báo biến
let x;

const num = new Number(1234);

// toString() - trả về một chuỗi biểu diễn số
x = num.toString(); // Hiển thị ra 1234
console.log(x);

// Để lấy độ dài
x = num.toString().length; // Độ dài của phần tử
console.log(x);

// toFixed() - trả về một chuỗi biểu diễn số với số thập phân được chỉ định
x = num.toFixed(2); // Trả về giá trị số thập phân với phân tử sau dấu phảy là '2'
console.log(x);

// toPrecision() - trả về một số có độ dài được chỉ định
x = num.toPrecision(3); // Hiển thị ra 1.23e+3
console.log(x);
// toExentialial() - chuyển đổi một số thành ký hiệu số mũ và trả về giá trị của nó dưới dạng chuỗi
x = num.toExponential(2); // Hiển thị ra 1.23e+3
console.log(x);

// toLocaleString() - trả về một chuỗi biểu diễn số, sử dụng ngôn ngữ hiện tại
x = num.toLocaleString('en-US'); // Hiển thị ra 1,234
console.log(x);

// valueOf - Nhận giá trị
x = num.valueOf(); // Lấy giá trị được khai báo ở trên xuống
console.log(x);

//================ Bản thân đối tượng Number có một số thuộc tính và phương thức

// Số lớn nhất và nhỏ nhất có thể
x = Number.MAX_VALUE;
console.log(x);       // Hiển thị ra 1.7976931348623157e+308
x = Number.MIN_VALUE;
console.log(x);       // Hiển thị ra 5e-324