class User {
    constructor(id, user_name, email, password) {
      this.id = id;
      this.user_name = user_name;
      this.email = email;
      this.password = password;
    }
  }
  
  let users = [];
  
  let id = 1;
  let user_name = prompt("Enter user name: ");
  let email = prompt("Enter email: ");
  let password = prompt("Enter password: ");
  
  while (user_name === "" || user_name.length < 3 || email === "" || !validateEmail(email) || password === "" || password.length < 8) {
    alert("Invalid input. Please try again.");
    user_name = prompt("Enter user name: ");
    email = prompt("Enter email: ");
    password = prompt("Enter password: ");
  }
  
  users.push(new User(id, user_name, email, password));
  
  console.log(users);
  
  function validateEmail(email) {
    const re = /\S+@\S+\.\S+/;
    return re.test(email);
  }