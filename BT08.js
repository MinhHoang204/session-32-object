function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
  }
  
  function registerUser(id, user_name, email, password) {
    if (user_name === "" || !validateEmail(email) || password.length < 8) {
      console.log("Thông tin đăng ký không hợp lệ");
      return;
    }
  
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email) {
        console.log("Email đã tồn tại");
        return;
      }
    }
  
    const user = {
      id: id,
      user_name: user_name,
      email: email,
      password: password,
    };
  
    users.push(user);
    console.log("Đăng ký thành công");
  }
  
  function loginUser(email, password) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].email === email && users[i].password === password) {
        console.log("Đăng nhập thành công");
        console.log(users[i]);
        return;
      }
    }
  
    console.log("Đăng nhập thất bại");
  }  