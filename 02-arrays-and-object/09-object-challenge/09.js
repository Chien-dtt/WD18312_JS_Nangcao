// Bước 1 : Khai báo mảng
const library = [
    {
      title: 'The Road Ahead',
      author: 'Bill Gates',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Steve Jobs',
      author: 'Walter Isaacson',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
    {
      title: 'Mockingjay',
      author: 'Suzanne Collins',
      status: {
        own: true,
        reading: false,
        read: false,
      },
    },
  ];

  console.log(library);
  


  // Bước 2 : Đặt từng mảng con thằng từng đường dẫn đọc
library[0].status.read = true;
library[1].status.read = true;
library[2].status.read = true;



// Bước 3 : Truy xuất phân tử theo cú pháp dưới đây
const { title: firstBook } = library[0];
console.log(firstBook);  // Hiển thị : The Road Ahead

// Bước 4 : 
const libraryJSON = JSON.stringify(library);
console.log(libraryJSON); // Hiển thị toàn bộ thông tin mảngs