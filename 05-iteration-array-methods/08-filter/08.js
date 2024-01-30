const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];

const evenNumbers = numbers.filter(function (number) {
    return number % 2 === 0;
  });
  console.log(evenNumbers); // Hiển thị: (6) [2, 4, 6, 8, 10, 12]


// Phiên bản ngắn
const evenNumbers2 = numbers.filter((number) => number % 2 === 0);
console.log(evenNumbers2); // Hiển thị: (6) [2, 4, 6, 8, 10, 12]

// Tương tự với forEach
const evenNumbers3 = [];
numbers.forEach((number) => {
  if (number % 2 === 0) {
    evenNumbers.push(number);
  }
});
console.log(evenNumbers3);


// Khai báo mảng
const companies = [
    { name: 'Company One', category: 'Finance', start: 1981, end: 2004 },
    { name: 'Company Two', category: 'Retail', start: 1992, end: 2008 },
    { name: 'Company Three', category: 'Auto', start: 1999, end: 2007 },
    { name: 'Company Four', category: 'Retail', start: 1989, end: 2010 },
    { name: 'Company Five', category: 'Technology', start: 2009, end: 2014 },
    { name: 'Company Six', category: 'Finance', start: 1987, end: 2010 },
    { name: 'Company Seven', category: 'Auto', start: 1986, end: 1996 },
    { name: 'Company Eight', category: 'Technology', start: 2011, end: 2016 },
    { name: 'Company Nine', category: 'Retail', start: 1981, end: 1989 },
  ];


// Chỉ lấy các công ty bán lẻ
const retailCompanies = companies.filter(
    (company) => company.category === 'Retail'
  );
// console.log(retailCompanies);


// Lấy các công ty bắt đầu vào hoặc sau năm 1980 và kết thúc vào hoặc trước năm 2005
const earlyCompanies = companies.filter(
    (company) => company.start >= 1980 && company.end <= 2005
  );
  // console.log(earlyCompanies);


  // Nhận các công ty tồn tại từ 10 năm trở lên
  const longCompanies = companies.filter(
    (company) => company.end - company.start >= 10
  );
  console.log(longCompanies);