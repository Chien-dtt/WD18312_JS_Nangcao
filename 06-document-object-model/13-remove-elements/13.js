// Phương thức xóa()
function removeClearButton() {
    const clearBtn = document.querySelector('#clear');
    clearBtn.remove();
  }

  // Phương thức RemoveChild()
  function removeFirstItem() {
    const ul = document.querySelector('ul');
    const li = document.querySelector('li:first-child');
  
    ul.removeChild(li);
  }


  // Những ví dụ khác

  function removeItem(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelector(`li:nth-child(${itemNumber})`);
  
    ul.removeChild(li);
  }


  function removeItem2(itemNumber) {
    const ul = document.querySelector('ul');
    const li = document.querySelectorAll('li')[itemNumber - 1];
  
    ul.removeChild(li);
  }
  
  function removeItem3(itemNumber) {
    const li = document.querySelectorAll('li');
    li[itemNumber - 1].remove();
  }
  
  const removeItem4 = (itemNumber) =>
    document.querySelectorAll('li')[itemNumber - 1].remove();
  
  removeClearButton();
  // removeFirstItem();
  // removeItem(2);
  removeItem4(2);