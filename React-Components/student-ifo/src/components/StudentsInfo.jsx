import React from "react";
const studentLists = [
  {
    id: "1",
    name: "Pham Thuong",
    age: 20,
    address: "Thanh Hoa",
  },
  {
    id: "2",
    name: "Nguyen Van",
    age: 25,
    address: "Thanh Hoa",
  },
  {
    id: "3",
    name: "Truc Tam",
    age: 18,
    address: "Thanh Hoa",
  },
];
function StudentInfo() {
  return (
    <table className="table">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col">Age</th>
          <th scope="col">Address</th>
        </tr>
      </thead>
      <tbody>
        {studentLists.map((student) => (
          <tr key={student.id}>
            <th scope="row">{student.id}</th>
            <td>{student.name}</td>
            <td>{student.age}</td>
            <td>{student.address}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
export default StudentInfo;
