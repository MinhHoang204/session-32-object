let information = {
    id: "",
    name: "",
    phone: "",
    address: ""
  };
  
  information.id = prompt("Nhập ID của bạn:");
  information.name = prompt("Nhập tên của bạn:");
  information.phone = prompt("Nhập số điện thoại của bạn:");
  information.address = prompt("Nhập địa chỉ của bạn:");
  
  console.log(`Thông tin cá nhân của bạn là:
  ID: ${information.id}
  Tên: ${information.name}
  Số điện thoại: ${information.phone}
  Địa chỉ: ${information.address}`);