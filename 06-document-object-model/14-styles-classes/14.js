// Khai bao bien
const text = document.querySelector('p');
const itemList = document.querySelector('.item-list');
const items = itemList.querySelectorAll('li');


function run() {
    // className - Lấy một chuỗi của tất cả các lớp
    console.log(itemList.className);
    // Thay đổi các lớp bằng className
    text.className = 'card dark';

      // classList - Mảng các lớp, cũng có các phương thức để thêm, xóa, chuyển đổi và thay thế
  console.log(itemList.classList);

 // Chúng ta có thể lặp qua các lớp
  itemList.classList.forEach((c) => console.log(c));

  // Thêm, xóa, chuyển đổi, thay thế
  text.classList.add('dark');
  text.classList.remove('card');
  text.classList.toggle('hidden');
  text.classList.replace('card', 'dark');

// thuộc tính style - Thêm kiểu cho phần tử
  itemList.style.lineHeight = '3';

  items.forEach((item, index) => {
    item.style.color = 'red';

    if (index === 2) {
      item.style.color = 'blue';
    }
  });
}

document.querySelector('button').onclick = run;