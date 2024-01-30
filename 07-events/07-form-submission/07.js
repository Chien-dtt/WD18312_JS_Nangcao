const form = document.getElementById('item-form');

function onSubmit(e) {
    e.preventDefault();

    // Get value with .value
    const item = document.getElementById('item-input').value;
    const priority = document.getElementById('priority-input').value;

    if (item === '' || priority === '0') {
        alert('Please fill in all fields');
        return;
    }

    console.log(item, priority);
}

// Sử dụng đối tượng FormData
function onSubmit2(e) {
    e.preventDefault();

    const formData = new FormData(form);

    // Lấy từng mục riêng lẻ
    const item = formData.get('item');
    const priority = formData.get('priority');

    console.log(item, priority);

    // Nhận tất cả mục nhập dưới dạng Iterator
    const entries = formData.entries();
    console.log(entries);

    // Lặp qua các mục
    for (let entry of entries) {
        console.log(entry[1]);
    }
}

form.addEventListener('submit', onSubmit2);