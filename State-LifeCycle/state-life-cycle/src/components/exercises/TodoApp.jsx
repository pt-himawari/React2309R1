import React, { useState } from "react";
function TodoApp() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleAdd = () => {
    setJobs([...jobs, job]);
    setJob("");
  };
  const handleDelete = (index) => {
    setJobs((prevJobs) => {
      return prevJobs.filter((item, i) => i !== index);
    });
  };

  return (
    <div className="w-50    my-5">
      <h3>4. Todo List</h3>
      <div className="ms-5 my-4 border p-5" style={{ height: "500px" }}>
        <div className="d-flex mb-3">
          <input
            type="text"
            value={job}
            onChange={(e) => setJob(e.target.value)}
            className="form-control w-50"
          />

          <button
            type="button"
            onClick={handleAdd}
            className="btn  btn-primary ms-3 "
          >
            Add
          </button>
        </div>
        <span>show{jobs}</span>
        <ul className="list-group">
          <li
            className="list-group-item active"
            // onClick={}
            aria-current="true"
          >
            To-do List
          </li>
          {jobs.map((job, index) => (
            <li key={index} className="list-group-item">
              {job}
              <button
                type="button"
                onClick={() => handleDelete(index)}
                className="btn  w-25 btn-primary ms-3 "
              >
                Delete
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoApp;
