// Khai báo hàm
const post = {
    id: 1,
    title: 'Post One',
    body: 'This is the body',
  };

  // Chuyển đổi sang chuỗi JSON
  const str = JSON.stringify(post);
  console.log(str.id);


  // Phân tích cú pháp JSON
  const obj = JSON.parse(str); // Lấy giá trị id của hàm 'post'
  console.log(obj.id); // Hiển thị : 1


  // JSON & mảng
  const posts = [
    {
      id: 1,
      title: 'Post One',
      body: 'This is the body',
    },
    {
      id: 2,
      title: 'Post Two',
      body: 'This is the body',
    },
  ];
  const str2 = JSON.stringify(posts);
  
  console.log(str2);
  // Hiển thị : [{"id":1,"title":"Post One","body":"This is the body"},{"id":2,"title":"Post Two","body":"This is the body"}]