// Thử thách 1
// function getCelsius(f) {
//   const celsius = ((f - 32) * 5) / 9;
//   return celsius;
// }

const getCelsius = (f) => ((f - 32) * 5) / 9;

console.log(`The temp is ${getCelsius(35)} \xB0C `); // Kết quả = 1.66666667 độ C


// Thử thách 2
function minMax(arr) {
    const min = Math.min(...arr);
    const max = Math.max(...arr);
  
    return {
      min,
      max,
    };
  }
  
  console.log(minMax([2, 31, 4, 5, 6])); // Hiển thị : min = 2, Max = 31


  // Thử thách 3
((length, width) => {
    const area = length * width;
  
    const output = `The area of a rectangle with a length of ${length} and a width of ${width} is ${area}.`;
  
    console.log(output);
  })(20, 10);