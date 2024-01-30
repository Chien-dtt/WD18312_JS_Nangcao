// Đặt thuộc tính của đối tượng có cùng tên với biến
const firstName = 'John';
const lastName = 'Doe';
const age = 30;
const person = {
    firstName,
    lastName,
    age,
  };
  console.log(person.age); // Kết quả hiển thị : 30

  // Phá hủy thuộc tính của đối tượng
  const todo = {
    id: 1,
    title: 'Take out trash',
    user: {
      name: 'John',
    },
  };
  
  const {
    id: todoId, // đổi tên id thành todoId
    title,
    user: { name }, // phá hủy nhiều cấp độ
  } = todo;
  
  console.log(todoId);


  
// Phá hủy mảng và sử dụng toán tử còn lại/trải rộng
const numbers = [23, 67, 33, 49, 52];
const [first, second, ...rest] = numbers;
console.log(first, second, rest); // Kết quả hiển thị : 23 67 => (3) [33, 49, 52]