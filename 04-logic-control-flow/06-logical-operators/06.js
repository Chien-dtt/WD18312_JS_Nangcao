console.log(10 < 20 && 30 > 15 && 40 > 30); // Tất cả đều phải đúng
console.log(10 > 20 || 30 < 15); // Chỉ có một điều phải đúng


// && - Sẽ trả về giá trị sai đầu tiên hoặc giá trị cuối cùng
let a;
a = 10 && 20;
a = 10 && 20 && 30;
a = 10 && 0 && 30;
a = 10 && '' && 0 && 30;
console.log(a);

const posts = ['Post One', 'Post Two'];
posts.length > 0 && console.log(posts[0]);

// || - Sẽ trả về giá trị trung thực đầu tiên hoặc giá trị cuối cùng
let b;
b = 10 || 20;
b = 0 || 20;
b = 0 || null || '' || undefined;

console.log(b);

// ?? - Trả về toán hạng bên phải khi toán hạng bên trái rỗng hoặc không xác định

let c;
c = 10 ?? 20;
c = null ?? 20;
c = undefined ?? 30;
c = 0 ?? 30;
c = '' ?? 30;

console.log(c);