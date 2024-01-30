// Lặp qua các đối tượng
const colorObj = {
    color1: 'red',
    color2: 'blue',
    color3: 'orange',
    color4: 'green',
  };
  
  for (const key in colorObj) {
    console.log(key, colorObj[key]);
  }


  // Lặp qua mảng
  const colorArr = ['red', 'green', 'blue', 'yellow'];
  for (const key in colorArr) {
    console.log(colorArr[key]);
  }