// querySelectorAll()
// Trả về một NodeList

const listItems = document.querySelectorAll('.item');

// Truy cập các phần tử theo chỉ mục
console.log(listItems[1].innerText);


// Đặt màu cho phần tử cụ thể
listItems[1].style.color = 'red';

// Chúng ta có thể sử dụng forEach() trên NodeList
listItems.forEach((item, index) => {
    item.style.color = 'red';
  
    if (index === 1) {
      item.remove();
    }
  
    if (index === 0) {
      item.innerHTML = ` Oranges
      <button class="remove-item btn-link text-red">
        <i class="fa-solid fa-xmark"></i>
      </button>`;
    }
  });


  // getElementsByClassName()
// Returns an HTMLCollection


const listItems2 = document.getElementsByClassName('item');

console.log(listItems2[2].innerText);

const listItemsArray = Array.from(listItems2);

listItemsArray.forEach((item) => {
    console.log(item.innerText);
  });

  // getElementsByTagName()

  const listItems3 = document.getElementsByTagName('li');
console.log(listItems3[0].innerText);