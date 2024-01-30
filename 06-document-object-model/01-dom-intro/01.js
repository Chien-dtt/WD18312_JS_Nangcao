// Đối tượng cửa sổ toàn cục
console.log(window);

// Đối tượng tài liệu là một phần của đối tượng cửa sổ
console.dir(window.document);

// Chúng ta có thể truy cập trực tiếp các phần tử DOM bằng các thuộc tính
console.log(document.body);
console.log(document.links[0]);

// Chúng ta có thể thiết lập thuộc tính của các phần tử
// document.body.innerHTML = '<h1>Xin chào từ body</h1>';

// The document object has a ton of methods. One is `document.write()`, which will write something to the document
document.write('Hello from JS');

// We also have methods to select elements more directly
document.getElementById('main').innerHTML = '<h1>Hello from main</h1>';

document.querySelector('#main h1').innerText = 'Hello';