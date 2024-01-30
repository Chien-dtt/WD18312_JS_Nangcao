// Falsy Values:
// - false
// - 0
// - "" or '' (Empty string)
// - null
// - undefined
// - NaN

// Truthy Values:
// - Everything else that is not falsy
// - true
// - '0' (0 in a string)
// - ' ' (space in a string)
// - 'false' (false in a string)
// - [] (empty array)
// - {} (empty object)
// - function () {} (empty function)


const x = function () {};

if (x <= 5) {
    console.log('This is truthy');
  } else {
    console.log('This is falsy');
  }
  
  console.log(Boolean(5));



  // Cảnh báo trung thực và giả dối
  const children = 5;
  // Kiểm tra chữ 0
  if (children) {
    console.log(`You have ${children} children`);
  } else {
    console.log('Please enter number of children');
  }
  // Kết quả
if (!isNaN(children)) {
    console.log(`You have ${children} children`);
  } else {
    console.log('Please enter number of children');
  }
  

  // Kiểm tra mảng trống
  const posts = ['Post One'];
  // Luôn đúng ngay cả khi trống
if (posts) {
    console.log('List Posts');
  } else {
    console.log('No Posts To List');
  }
  
  // Giải pháp
  if (posts.length > 0) {
    console.log('List Posts');
  } else {
    console.log('No Posts To List');
  }


  // Kiểm tra các đối tượng trống
  const user = {
    name: 'Brad',
  };
// Luôn đúng ngay cả khi không có thuộc tính
  if (user) {
    console.log('List User');
  } else {
    console.log('No User');
  }
  // Kết quả
  if (Object.keys(user).length > 0) {
    console.log('List User');
  } else {
    console.log('No User');
  }


  // Bình đẳng lỏng lẻo (==)
  console.log(false == 0); // true
console.log('' == 0); // true
console.log(null == undefined); // true

// Bình đẳng nghiêm ngặt
console.log(false === 0); // false
console.log('' === 0); // false
console.log(null === undefined); // false
  