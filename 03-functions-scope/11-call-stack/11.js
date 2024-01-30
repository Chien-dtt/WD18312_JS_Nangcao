// Mở tab 'nguồn' và đặt điểm dừng ở hàm first()

// Cách 1
function first() {
    console.log('first...');
  }
  
  function second() {
    console.log('second...');
  }
  
  function third() {
    console.log('third...');
  }
  
  first();
  second();
  third();
  

  // Cách thứ hai
  function first() {
  console.log('first...');
  second();
}

function second() {
  console.log('second...');
  third();
}

function third() {
  console.log('third...');
}

first();