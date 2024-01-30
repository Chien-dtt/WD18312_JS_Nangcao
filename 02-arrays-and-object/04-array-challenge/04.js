// Thử thách 1
// Khai báo biến
const arr = [1, 2, 3, 4, 5];

arr.reverse();
arr.push(0);
arr.unshift(6);
console.log(arr); // Hiển thị : [6, 5, 4, 3, 2, 1, 0]

// Kết quả tương tự như trên
arr.push(6);
arr.unshift(0);
arr.reverse();
console.log(arr); // Hiển thị : [6, 0, 1, 2, 3, 4, 5, 6, 0]


// Thử thách 2
// Khái báo biến
const arr1 = [1, 2, 3, 4, 5];
const arr2 = [5, 6, 7, 8, 9, 10];

// Giải pháp 1
const arr3 = arr1.slice(0, 4).concat(arr2);
console.log(arr3); // Hiển thị : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

// Giải pháp 2
const arr4 = [...arr1, ...arr2];
arr4.splice(4, 1);
console.log(arr4); // Hiển thị : [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]