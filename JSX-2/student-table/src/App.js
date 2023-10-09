import logo from "./logo.svg";
import "./App.css";

import React, { useEffect, useState } from "react";

function App() {
  const [students, setStudents] = useState([]);

  useEffect(() => {
    fetch("http://localhost:3000/students", {
      method: "GET",
    })
      .then(function (response) {
        return response.json();
      })
      .then(function (data) {
        setStudents(data);
      });
  }, []);

  return (
    <div className="container mt-5">
      <table className="table">
        <thead className="thead-dark">
          <tr>
            <th scope="col">#</th>
            <th scope="col">Company</th>
            <th scope="col">Contact</th>
            <th scope="col">Country</th>
          </tr>
        </thead>
        <tbody>
          {students.map((student, index) => (
            <tr key={index}>
              <th scope="row">{index + 1}</th>
              <td>{student.company}</td>
              <td>{student.contact}</td>
              <td>{student.country}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default App;
