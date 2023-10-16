import React, { useState } from "react";
function StudentApp() {
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });
  const [studentList, setStudentList] = useState([]);
  // sử lý mỗi lần nhập dữ liệu vào thẻ input
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };
  //Thêm trạng thái để lưu thông tin học sinh đang chỉnh sửa
  const [editingStudent, setEditingStudent] = useState(null);
  const handleAddStudent = () => {
    if (editingStudent) {
      // Nếu đang chỉnh sửa, cập nhật thông tin học sinh
      const updatedList = studentList.map((student) =>
        student === editingStudent ? formData : student
      );
      setStudentList(updatedList);
    } else {
      // Nếu không, thêm học sinh mới
      setStudentList([...studentList, formData]);
    }
    setFormData({ name: "", phone: "", email: "" }); // Xóa trạng thái dữ liệu đang chỉnh sửa
    setEditingStudent(null); // Đặt lại trạng thái chỉnh sửa về null
  };
  const handleEditStudent = (student) => {
    setFormData(student); // Đặt dữ liệu của học sinh vào biểu mẫu
    setEditingStudent(student); // Đặt trạng thái chỉnh sửa để theo dõi
  };

  // hàm xoá
  const handleDelete = (index) => {
    console.log("da ckic");
    setStudentList((prevJobs) => prevJobs.filter((item, i) => i !== index));
  };
  return (
    <div className="my-5">
      <h3>5. Student Manager</h3>

      <div className="ms-5 my-4">
        <div className="d-flex p-2  text-light bg-dark  justify-content-between align-items-center">
          <h3 className="  ">Student App</h3>
          <div className="d-flex ">
            <button
              type="button"
              className=" btn   d-flex align-items-center me-2 p-2 px-3"
              style={{
                backgroundColor: "#5272F2",
              }}
              data-bs-toggle="modal"
              data-bs-target="#contactModal"
            >
              <i className="material-icons me-1 text-light ">group_add</i>
              <span className="text-light">Add New Employee</span>
            </button>
            {/* <button
              type="button"
              className="btn btn-outline-dark d-flex align-items-center me-2 py-0"
            >
              <i className="material-icons text-light">filter_list</i>
              <span className="fs-4 text-light">Filter</span>
            </button> */}
          </div>
          {/* <!-- Button trigger modal add --> */}

          {/* <!-- Modal add  --> */}
          <div
            className="modal fade"
            id="contactModal"
            tabIndex={-1}
            // tabindex=""
            aria-labelledby="exampleModalLabel"
            aria-hidden="true"
            style={{ display: "none" }}
          >
            <div className="modal-dialog">
              <div className="modal-content">
                <div className="modal-header bg-dark ">
                  <h1 className="modal-title  fs-5" id="contactModalLabelAdd">
                    Add Contact
                  </h1>
                  <h1
                    className="modal-title fs-5 d-none"
                    id="contactModalLabelUpdate"
                  >
                    Update Contact
                  </h1>
                  <button
                    type="button"
                    className="btn-close"
                    data-bs-dismiss="modal"
                    aria-label="Close"
                  ></button>
                </div>

                <div className="modal-body">
                  <div className="d-flex">
                    <div className="me-2">
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text col-5"
                          id="inputGroup-sizing-default"
                        >
                          Name
                        </span>
                        <input
                          name="name"
                          type="text"
                          value={formData.name}
                          onChange={handleInputChange}
                          className="form-control"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                        />
                      </div>

                      <div className="input-group mb-3">
                        <span
                          className="input-group-text col-5"
                          id="inputGroup-sizing-default"
                        >
                          Phone number
                        </span>
                        <input
                          type="number"
                          className="form-control"
                          name="phone"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          value={formData.phone}
                          onChange={handleInputChange}
                        />
                      </div>
                      <div className="input-group mb-3">
                        <span
                          className="input-group-text col-5"
                          id="inputGroup-sizing-default"
                        >
                          Email
                        </span>
                        <input
                          type="email"
                          className="form-control"
                          required=""
                          name="email"
                          aria-label="Sizing example input"
                          aria-describedby="inputGroup-sizing-default"
                          value={formData.email}
                          onChange={handleInputChange}
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="modal-footer">
                  {/* nut add */}
                  <button
                    id="btnAddNewContact"
                    type="button"
                    data-bs-dismiss="modal"
                    className="btn  btn-primary"
                    onClick={handleAddStudent}
                  >
                    {editingStudent ? "Save" : "Add"}
                  </button>
                  {/* nut Update */}
                  <button
                    id="btnUpdateContact"
                    type="submit"
                    data-bs-dismiss="modal"
                    className="btn btn-dark d-none"
                  >
                    Update
                  </button>
                  <button
                    type="button"
                    className="btn btn-dark"
                    data-bs-dismiss="modal"
                  >
                    Close
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* <!-- <button type="button" className="btn btn-primary">Add</button> --> */}
        </div>
        <div className="mt-3">
          <table className="table table-hover align-middle">
            <thead className="table-dark">
              <tr>
                <th scope="col">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="flexCheckDefault"
                    />
                  </div>
                </th>
                <th scope="col">Name</th>

                <th scope="col">Phone</th>
                <th scope="col">Email</th>
                <th scope="col">Actions</th>
              </tr>
            </thead>
            <tbody>
              {studentList.map((student, index) => (
                <tr key={index}>
                  <th scope="col">
                    <div className="form-check">
                      <input
                        className="form-check-input"
                        type="checkbox"
                        value=""
                        id="flexCheckDefault"
                      />
                    </div>
                  </th>
                  <td>{student.name}</td>
                  <td>{student.phone}</td>
                  <td>{student.email}</td>
                  <td>
                    <div className="d-flex align-items-center h-100 fs-5">
                      <i
                        className="fa fa-edit me-2 cursor-pointer "
                        data-bs-toggle="modal"
                        data-bs-target="#contactModal"
                        onClick={() => handleEditStudent(student)}
                      >
                        {/* Edit */}
                      </i>
                      <i
                        className="material-icons cursor-pointer"
                        onClick={() => handleDelete(index)}
                      >
                        delete
                      </i>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
export default StudentApp;
