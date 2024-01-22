let students = [];

let numStudents = prompt("Nhập số lượng sinh viên: ");

for (let i = 0; i < numStudents; i++) {
  let student = {};
  student.id = prompt(`Nhập ID của sinh viên thứ ${i + 1}: `);
  student.name = prompt(`Nhập tên của sinh viên thứ ${i + 1}: `);
  students.push(student);
}

console.log(students);