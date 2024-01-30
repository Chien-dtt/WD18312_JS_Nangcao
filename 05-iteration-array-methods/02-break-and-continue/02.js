// Break
for (let i = 0; i <= 20; i++) {
    if (i === 15) {
      console.log('Breaking...');
      break;
    }
    console.log(i);
  } // Break: đóng giới hạn tham 15



  // Continue
for (let i = 0; i <= 20; i++) {
    if (i === 13) {
      console.log('Skipping 13...');
      continue;
    }
    console.log(i);
  } // Continue: Tiếp tục chạy từ phần tử thứ 13 và chạy tiếp đến 20