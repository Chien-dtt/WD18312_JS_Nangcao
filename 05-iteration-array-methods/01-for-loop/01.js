// for ([initialExpression]; [conditionExpression]; [incrementExpression])
//   tuyên bố;

// EXPRESSION INITITAL - Khởi tạo một biến/bộ đếm
// BIỂU THỨC ĐIỀU KIỆN - Điều kiện là vòng lặp sẽ tiếp tục chạy miễn là nó được đáp ứng hoặc cho đến khi điều kiện sai
// INCREMENT EXPRESSION - Biểu thức sẽ được thực thi sau mỗi lần lặp của vòng lặp. Thường tăng biến
// STATEMENT - Mã sẽ được thực thi mỗi khi vòng lặp được chạy. Để thực thi một `khối mã`, hãy sử dụng cú pháp `{}`


for (let i = 0; i <= 10; i++) {
  if (i === 7) {
    console.log('7 is my lucky number');
  } else {
    console.log('Number ' + i);
  }
}


// Vòng lồng nhau
// for (let i = 1; i <= 10; i++) {
//   console.log('Number ' + i);

//   for (let j = 1; j <= 5; j++) {
//     console.log(`${i} * ${j} = ${i * j}`);
//   }
// }



// Lặp qua một mảng
const names = ['Brad', 'Sam', 'Sara', 'John', 'Tim'];

for (let i = 0; i < names.length; i++) {
  if (names[i] === 'John') {
    console.log(names[i] + ' is the best');
  } else {
    console.log(names[i]);
  }
}