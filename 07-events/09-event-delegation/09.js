const listItems = document.querySelectorAll('li');
const list = document.querySelector('ul');

// Thêm trình xử lý sự kiện trên tất cả các mục
// listItems.forEach((item) => {
//   item.addEventListener('click', (e) => {
//     e.target.remove();
//   });
// });

// Thêm một trình xử lý sự kiện duy nhất trên cha (Ủy nhiệm sự kiện)
list.addEventListener('click', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.remove();
    }
});

list.addEventListener('mouseover', (e) => {
    if (e.target.tagName === 'LI') {
        e.target.style.color = 'red';
    }
});