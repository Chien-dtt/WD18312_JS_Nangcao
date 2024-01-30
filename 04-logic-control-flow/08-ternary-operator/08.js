const age = 17;

// Sử dụng câu lệnh if
if (age >= 18) {
    console.log('You can vote!');
} else {
    console.log('You can not vote');
}


// Sử dụng toán tử 3 ngôi
age >= 18 ? console.log('You can vote!') : console.log('You can not vote');


// Gán giá trị có điều kiện cho một biến
const canVote = age >= 18 ? true : false;
const canVote2 = age >= 18 ? 'You can vote!' : 'You can not vote';

console.log(canVote);
console.log(canVote2);


// Nhiều câu lệnh

const auth = true;
// Long version
// let redirect;

// if (auth) {
//   alert('Welcome to the dashboard');
//   redirect = '/dashboard';
// } else {
//   alert('Access Denied');
//   redirect = '/login';
// }


// Phiên bản ternary ngắn hơn
const redirect = auth
  ? (alert('Welcome to the dashbaord'), '/dashboard')
  : (alert('Access Denied'), '/login');

console.log(redirect);


// Ternary không có gì khác
auth ? console.log('Welcome to the dashboard') : null;


// Viết tắt của ternary không có else
auth && console.log('Welcome to the dashboard');