const socials = ['Twitter', 'LinkedIn', 'Facebook', 'Instagram'];

// Xem chuỗi nguyên mẫu
console.log(socials.__proto__);

// Dạng dài
socials.forEach(function (item) {
    console.log(item);
  });

// Dạng ngắn
socials.forEach((item) => console.log(item));


// Chúng ta cũng có thể truyền vào chỉ mục và mảng ban đầu
socials.forEach((item, index, arr) => console.log(`${index} - ${item}`, arr));

// Sử dụng hàm được đặt tên
function logSocials(social) {
    console.log(social);
  }
  socials.forEach(logSocials);



 // Mảng đối tượng
 const socialObjs = [
    { name: 'Twitter', url: 'https://twitter.com' },
    { name: 'Facebook', url: 'https://facebook.com' },
    { name: 'Linkedin', url: 'https://linkedin.com' },
    { name: 'Instagram', url: 'https://instagram.com' },
  ];
  socialObjs.forEach((item) => console.log(item.url));