// Chuyển đến tab 'nguồn' và thêm điểm dừng ở dòng đầu tiên và xem qua để xem giai đoạn thực thi đang hoạt động
const x = 100;
const y = 50;

function getSum(n1, n2) {
  const sum = n1 + n2;
  return sum;
}

const sum1 = getSum(x, y);
const sum2 = getSum(10, 5);

console.log(sum1, sum2); // kết quả : 150 15