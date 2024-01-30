// Khai báo biến
let x;
let d = new Date();

// Phương thức ngày tháng
x = d.toString();
console.log(x);

x = d.getTime();
x = d.valueOf();
console.log(x);

x = d.getFullYear(); // Lấy năm hiện tại
console.log(x);

x = d.getMonth(); // Lấy tháng hiện tại
x = d.getMonth() + 1;
console.log(x);

x = d.getDate(); // Lấy ngày hiện tại
console.log(x);

x = d.getDay(); // Thứ tự ngày trong tuần ( vd : thứ 2 tính là 1)
console.log(x);

x = d.getHours(); // Lấy giờ hiện tại
console.log(x);

x = d.getMinutes(); // Lấy số phút hiện tại
console.log(x);

x = d.getSeconds(); // Lấy số giây hiện tại
console.log(x);

x = d.getMilliseconds(); // Lấy số miligiây hiện tại (Max mimigiây = 999)
console.log(x);

x = `${d.getFullYear()}-${d.getMonth() + 1}-${d.getDate()}`; // Lấy (Năm - Tháng - Ngày)
console.log(x);



// API Intl.DateTimeFormat (ngôn ngữ cụ thể)
x = Intl.DateTimeFormat('en-US').format(d); // m/d/y
console.log(x);
x = Intl.DateTimeFormat('en-GB').format(d); // dd/mm/yyyy
console.log(x);
x = Intl.DateTimeFormat('default').format(d); // d/m/y
console.log(x);


x = Intl.DateTimeFormat('default', { month: 'long' }).format(d); // Lấy tháng thời điểm hiện tại bằng tiếng Việt ( vd: Tháng 1 )
console.log(x);

x = d.toLocaleString('default', { month: 'short' }); // Lấy tháng thời điểm hiện tại nhưng rút ngắn văn bản
console.log(x);



x = d.toLocaleString('default', { // Lấy chính xác đủ thời gian được khai báo ( vd: lúc 01:13:26 Thứ Hai, 8 tháng 1, 2024 )
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZone: 'America/New_York',
  });
  console.log(x);