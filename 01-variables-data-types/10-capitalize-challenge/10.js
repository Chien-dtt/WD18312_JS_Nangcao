// Tạo một chuỗi mới tên là "myNewString" chứa giá trị của "Developer", sử dụng giá trị chữ thường từ "myString"
const myString = 'developer';

let myNewString;

// Trường hợp 1:
myNewString = myString.charAt(0).toUpperCase() + myString.substring(1);
console.log(myNewString);

// Trường hợp 2:
myNewString = myString[0].toUpperCase() + myString.substring(1);
console.log(myNewString);

// Trường hợp 3:
myNewString = `${myString[0].toUpperCase()}${myString.slice(1)}`;
console.log(myNewString);

// Tất cả các trường hợp đều cho ra 1 giá trị giống nhau là Developer
// Cả 3 trường hợp sử dụng touppercase để in hoa chữ cái đầu tiên và 3 trường hợp khác nhau đều ra cùng 1 kết quả