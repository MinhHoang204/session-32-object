let information = {
    id: 1,
    name: "John Doe",
    phone: "123-456-7890",
    address: "123 Main St",
  };
  
  console.log("Before:");
  console.log(information);
  
  delete information.address;
  information.email = "johndoe@example.com";
  
  console.log("After:");
  console.log(information);