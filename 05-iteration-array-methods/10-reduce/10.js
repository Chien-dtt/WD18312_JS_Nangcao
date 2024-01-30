// Khai báo biến
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Cộng tất cả các số lại với nhau
const sum = numbers.reduce(function (accumulator, currentValue) {
    return accumulator + currentValue;
  }, 0);
console.log(sum); // hiển thị: 55


const sum2 = numbers.reduce((acc, cur) => acc + cur, 0);


// Sử dụng vòng lặp for
const sum3 = () => {
    let acc = 0;
    for (const cur of numbers) {
      acc += cur;
    }
    return acc;
  };
  console.log(sum3);



  // Ví dụ về giỏ hàng (đối tượng)
  const cart = [
    { id: 1, name: 'Product 1', price: 130 },
    { id: 2, name: 'Product 2', price: 150 },
    { id: 3, name: 'Product 3', price: 200 },
  ];
  
  const total = cart.reduce(function (acc, product) {
    return acc + product.price;
  }, 0);
  
  console.log(total);