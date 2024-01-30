function insertAfter(newEl, existingEl) {
    existingEl.parentElement.insertBefore(newEl, existingEl.nextSibling);
  }


  // Phần tử mới cần chèn
  const li = document.createElement('li');
li.textContent = 'Insert Me After!';


// Phần tử hiện có để chèn sau
const firstItem = document.querySelector('li:first-child');


// Hàm tùy chỉnh của chúng tôi
insertAfter(li, firstItem);