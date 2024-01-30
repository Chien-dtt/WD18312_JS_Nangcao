const clearBtn = document.querySelector('#clear');

function onClear() {
    const itemList = document.querySelector('ul');
    const items = itemList.querySelectorAll('li');
    // itemList.innerHTML = '';

    // items.forEach((item) => item.remove());

    while (itemList.firstChild) {
        itemList.removeChild(itemList.firstChild);
    }
}


// Trình nghe sự kiện JavaScript
clearBtn.onclick = function() {
    alert('Clear Items');
};

clearBtn.onclick = function() {
    console.log('Clear Items');
};

// addEventListener()
clearBtn.addEventListener('click', () => alert('Clear Items'));

// Sử dụng hàm được đặt tên
clearBtn.addEventListener('click', onClear);

// removeEventListener()
setTimeout(() => clearBtn.removeEventListener('click', onClear), 5000);

// Kích hoạt sự kiện từ JS
setTimeout(() => clearBtn.click(), 5000);