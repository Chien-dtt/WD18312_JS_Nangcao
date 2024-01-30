// ||= chỉ gán giá trị bên phải nếu bên trái là giá trị sai.
let a = null;

// if (!a) {
//   a = 10;
// }

// a = a || 10;

a ||= 10;

console.log(a); // 10


// &&= chỉ gán giá trị bên phải nếu bên trái là giá trị trung thực.

let b = 10;
if (b) {
    b = 20;
  }
  
  b = b && 20;
  
  b &&= 20;
  
  console.log(b); // 20


  // ??= chỉ gán giá trị bên phải nếu bên trái là null hoặc không xác định.

  let c = null;

if (c === null || c === undefined) {
  c = 20;
}

c = c ?? 20;

c ??= 20;

console.log(c); // 20