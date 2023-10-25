import React, { useState } from "react";
function TodoApp() {
  const [job, setJob] = useState("");
  const [jobs, setJobs] = useState([]);
  const handleAdd = () => {
    setJobs([...jobs, job]);
    setJob("");
  };
  // ham xoa
  const handleDelete = (index) => {
    setJobs((prevJobs) => {
      return prevJobs.filter((item, i) => i !== index);
    });
  };

  // ham sua
  // Thêm trạng thái để theo dõi giá trị đã chỉnh sửa
  const [editedValue, setEditedValue] = useState("");
  const handleEdit = (index) => {
    setEditedValue(jobs[index]);
    setEditingIndex(index);
  };
  // thêm trạng thái lưu
  // Thêm trạng thái để theo dõi chỉ mục đang được sửa
  const [editingIndex, setEditingIndex] = useState(null);
  const handleSave = (index) => {
    const updateJob = [...jobs];
    updateJob[index] = editedValue;
    setJobs(updateJob);
    setEditingIndex(null);
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
          {jobs.map((jobItem, index) => (
            <li key={index} className="list-group-item">
              <div className="d-flex justify-content-between">
                {editingIndex == index ? (
                  <>
                    <input
                      value={editedValue}
                      onChange={(e) => setEditedValue(e.target.value)} // Lưu giá trị chỉnh sửa vào trạng thái
                    />
                    <i
                      className="fa-solid fa-floppy-disk text-primary mt-1"
                      onClick={() => handleSave(index)}
                    ></i>
                    <i
                      class="far fa-window-close mt-1 text-success"
                      onClick={() => setEditingIndex(null)}
                    ></i>
                  </>
                ) : (
                  <h5>{jobItem}</h5>
                )}

                <div>
                  <i
                    className="fa-solid fa-pen-to-square me-2 text-warning"
                    onClick={() => handleEdit(index)}
                  ></i>

                  <i
                    className="fa-solid fa-trash-can text-danger"
                    onClick={() => handleDelete(index)}
                  ></i>
                </div>
              </div>

              {/* <button
                type="button"
                onClick={() => handleDelete(index)}
                className="btn  w-25 btn-primary ms-3 "
              > */}

              {/* </button> */}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
export default TodoApp;
