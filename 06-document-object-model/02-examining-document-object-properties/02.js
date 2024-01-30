// Khai báo biến
let output;

// document.all không được dùng nữa
output = document.all;
output = document.all[11];
output = document.all.length;

// Mọi thứ trong thẻ html
output = document.documentElement;

// Thẻ đầu và thẻ thân
output = document.head;
output = document.body;

// HTMLCollection mọi thứ trong head/body
output = document.head.children;
output = document.body.children;


// Thuộc tính ngẫu nhiên
output = document.doctype;
output = document.domain;
output = document.URL;
output = document.characterSet;
output = document.contentType;

// Lấy tất cả các form
output = document.forms;
output = document.forms[0];
output = document.forms[0].id;
output = document.forms[0].method;
output = document.forms[0].action;

// Thay đổi id biểu mẫu
document.forms[0].id = 'new-id';


// Lấy tất cả các liên kết
// output = document.links;
// output = document.links[0];
// output = document.links[0].href;
// output = document.links[0].href = 'https://facebook.com';
// output = document.links[0].id = 'google-link';
// output = document.links[0].className = 'google-class';
// output = document.links[0].classList;

// Lấy tất cả hình ảnh
output = document.images;
output = document.images[0];
output = document.images[0].src;


// Biến HTMLCollection thành một mảng
const forms = Array.from(document.forms);
forms.forEach((form) => console.log(form));

console.log(output);