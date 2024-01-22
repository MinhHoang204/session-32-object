class Contact {
    constructor(name, phone, email) {
      this.name = name;
      this.phone = phone;
      this.email = email;
    }
  }
  
  const contacts = [];
  
  function addContact(name, phone, email) {
    const contact = new Contact(name, phone, email);
    contacts.push(contact);
  }
  
  function findContactByName(name) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        return contacts[i];
      }
    }
  
    return "Không tìm thấy liên hệ";
  }
  
  function displayContacts() {
    for (let i = 0; i < contacts.length; i++) {
      console.log(`Tên: ${contacts[i].name}, Số điện thoại: ${contacts[i].phone}, Email: ${contacts[i].email}`);
    }
  }
  
  function deleteContactByName(name) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        contacts.splice(i, 1);
        console.log(`Đã xóa liên hệ ${name}`);
        return;
      }
    }
  
    console.log(`Không tìm thấy liên hệ ${name}`);
  }
  
  function updateContactByName(name, updatedInfo) {
    for (let i = 0; i < contacts.length; i++) {
      if (contacts[i].name === name) {
        contacts[i] = updatedInfo;
        console.log(`Đã cập nhật thông tin liên hệ ${name}`);
        return;
      }
    }
  
    console.log(`Không tìm thấy liên hệ ${name}`);
  }