// Thông số mặc định
function registerUser(user = 'Bot') {
    // Old way - before using `=`
    // if (!user) {
    //   user = 'Bot';
    // }
  
    return user + ' is registered';
  }
  
  console.log(registerUser()); // Hiển thị : Bot is registered



  // Thông số còn lại
  function sum(...numbers) {
    let total = 0;
  
    for (const num of numbers) {
      total += num;
    }
  
    return total;
  }
  
  console.log(sum(1, 2, 3, 4, 5, 6, 100)); // Tổng của các số: 121



  // Đối tượng là tham số
  function loginUser(user) {
    return `The user ${user.name} with the id of ${user.id} is logged in`;
  }
  
  const user = {
    id: 1,
    name: 'John',
  };
  
  console.log(loginUser(user)); // Hiện thị : The user John with the id of 1 is logged in
  console.log(
    loginUser({
      id: 2,
      name: 'Sara',
    })
  ); // Hiển thị : The user Sara with the id of 2 is logged in



  // Mảng là tham số
  function getRandom(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length);
  
    const item = arr[randomIndex];
  
    console.log(item);
  }
  
  getRandom([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]); // Random số