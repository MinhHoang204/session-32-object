let books = [
    { author: "Author 1", name: "Book 1" },
    { author: "Author 2", name: "Book 2" },
    { author: "Author 3", name: "Book 3" },
    { author: "Author 4", name: "Book 4" },
    { author: "Author 5", name: "Book 5" }
  ];
  
  // Yêu cầu người dùng nhập tên tác giả từ bàn phím
  let author = prompt("Nhập tên tác giả:");
  
  // Tìm kiếm thông tin sách theo tác giả
  let found = false;
  for (let i = 0; i < books.length; i++) {
    if (books[i].author === author) {
      console.log("Tìm thấy sách:");
      console.log("Author: " + books[i].author);
      console.log("Name: " + books[i].name);
      found = true;
    }
  }
  
  // In ra thông báo nếu không tìm thấy sách
  if (!found) {
    console.log("Không tìm thấy sách");
  }