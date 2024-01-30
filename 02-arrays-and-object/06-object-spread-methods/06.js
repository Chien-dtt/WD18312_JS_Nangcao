// Khai báo biến
let x;

// Tạo đối tượng bằng cách sử dụng hàm tạo đối tượng
const todo = new Object();
todo.id = 1;
todo.name = 'Buy Milk';
todo.completed = false;
x = todo;
console.log(x); // Hiển thị : {id: 1, name: 'Buy Milk', completed: false}


// Lồng ghép đối tượng
const person = {
    address: {
        coords: {
            lat: 42.9384,
            lng: -71.3232,
        },
    },
};
x = person.address.coords.lat;
console.log(x); // truy xuất đối tượng được lồng ghép theo chiều gọi theo đường dẫn : (42.9384)


// Khai báo biến dạng mảng
const obj1 = { a: 1, b: 2 };
const obj2 = { c: 3, d: 4 };

// Toán tử trải rộng
const obj3 = { ...obj1, ...obj2 };
console.log(obj3); // Hiển thị : {a: 1, b: 2, c: 3, d: 4}

// Tương tự như sử dụng ...
const obj4 = Object.assign({}, obj1, obj2);
console.log(obj4);  // Hiển thị : {a: 1, b: 2, c: 3, d: 4}


// Mảng đối tượng
const todos = [
    { id: 1, name: 'Buy Milk' },
    { id: 2, name: 'Pickup kids from school' },
    { id: 3, name: 'Take out trash' },
  ];
  x = todos[0].name; // Đường dẫn tới mảng vị trí thứ 0 và hàm name
  console.log(x);  // Hiển thị : Buy Milk

  // Lấy mảng khóa đối tượng
  x = Object.keys(todo); // Lấy toàn bộ thông tin mảng
  console.log(x); // Hiển thị : ['id', 'name', 'completed']

  // Lấy chiều dài của một đối tượng
  x = Object.keys(todo).length; // Độ dài
  console.log(x); 


  // Lấy mảng giá trị đối tượng
  x = Object.values(todo);
  console.log(x); // Hiển thị :  [1, 'Buy Milk', false]

  // Lấy mảng các cặp khóa/giá trị đối tượng
  x = Object.entries(todo);
  console.log(x);  // Hiển thị : [Array(2), Array(2), Array(2)]


  // Kiểm tra xem đối tượng có thuộc tính không (có = true, không = false)
  x = todo.hasOwnProperty('age');
  console.log(x);