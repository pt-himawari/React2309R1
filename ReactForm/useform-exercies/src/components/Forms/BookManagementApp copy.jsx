import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

let render1 = 0;
function BookManagementApp() {
  //--------------- Validation form --------------------------
  const { handleSubmit, register, formState } = useForm();

  //--------------- phần CRUD --------------------------------
  const [formData, setFormData] = useState({ title: "", quantity: 0 });
  const [books, setBooks] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const [editValue, setEditValue] = useState({ title: "", quantity: 0 });
  useEffect(() => {
    fetch("http://localhost:3000/library")
      .then((response) => response.json())
      .then((library) => {
        setBooks(library);
        // setBooks(post.data);
      });
  }, []);
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleAdd = () => {
    // 1. Cập nhật trạng thái giao diện
    setBooks([...books, formData]);

    // 2. Gửi yêu cầu API
    fetch("http://localhost:3000/library", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((response) => response.json())
      .then((data) => {
        // 3. Xử lý kết quả API (nếu cần)
        // setBooks([...books, data]);
        setFormData({ title: "", quantity: 0 });
        // setFormData({ title: "", quantity: 0 });
      });

    // 4. Đặt lại biểu mẫu
    setFormData({ title: "", quantity: 0 });
  };
  const handleDelete = (id, index) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (userConfirmed) {
      setBooks((prevBooks) => prevBooks.filter((item, i) => i !== index));
      fetch(`http://localhost:3000/library/${id}`, {
        method: "DELETE",
        headers: { "Content-Type": "application/json" },
      })
        .then((response) => response.json())
        .then((data) => {});
    }
  };
  const handleUpdate = (id, index) => {
    const updateBook = [...books];
    updateBook[index] = { ...editValue };
    setBooks(updateBook);
    setSelectIndex(null);
    fetch(`http://localhost:3000/library/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...editValue }), // Đảm bảo rằng bạn truyền dữ liệu cần cập nhật
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý kết quả từ API (nếu cần)
      });
  };
  render1++;
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">2.Book Management App : {render1} </h2>
      <div className="ms-5 fs-3 ">
        {/* form */}
        <form className="w-50" noValidate>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter title..."
              aria-describedby="emailHelp"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleInputChange}
              {...register("title", {
                required: {
                  value: true,
                  message: "* Please enter title",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2"></p>
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Quantity
            </label>
            <input
              type="number"
              className="form-control"
              placeholder="Enter name..."
              aria-describedby="emailHelp"
              id="quantity"
              name="quantity"
              value={formData.quantity}
              onChange={handleInputChange}
              {...register("quantity", {
                required: {
                  value: true,
                  message: "* Please enter quantity",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  // /^\S+@\S+$/i
                  message: "* Invalid email format!",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2"></p>
          </div>
          <button
            aria-label="Search"
            type="button"
            className="btn btn-primary mb-3"
            onClick={handleAdd}
            // disabled={!isDirty || !isValid}
          >
            Add
          </button>
        </form>
        <table className="table table-bordered text-center fs-5">
          <thead>
            <tr>
              <th>#</th>
              <th>Title</th>
              <th>Quantity</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {books.map((book, index) => (
              <tr key={index}>
                <td>{index + 1}</td>

                {selectIndex == index ? (
                  <>
                    <td className="text-start">
                      <input
                        type="text"
                        value={editValue.title}
                        onChange={(e) =>
                          setEditValue({ ...editValue, title: e.target.value })
                        }
                      />
                    </td>
                    <td>
                      <input
                        type="text"
                        value={editValue.quantity}
                        onChange={(e) =>
                          setEditValue({
                            ...editValue,
                            quantity: e.target.value,
                          })
                        }
                      />
                    </td>
                  </>
                ) : (
                  <>
                    <td className="text-start">{book.title}</td>
                    <td>{book.quantity}</td>
                  </>
                )}

                <td className="text-center">
                  <div className="fs-4 w-75">
                    {selectIndex == index ? (
                      <>
                        <i
                          className="fa-solid fa-floppy-disk me-2 text-success"
                          onClick={() => handleUpdate(book.id, index)}
                        >
                          {/* save */}
                        </i>
                        <i
                          className="fa-regular fa-rectangle-xmark me-2 text-secondary"
                          onClick={() => {
                            setSelectIndex(null);
                          }}
                        >
                          {/* cancel */}
                        </i>
                      </>
                    ) : (
                      <>
                        <i
                          className="fa fa-edit me-2 cursor-pointer  text-warning"
                          onClick={() => {
                            setSelectIndex(index);
                            setEditValue(book);
                          }}
                        >
                          {/* Edit */}
                        </i>
                        <i
                          className="fa-solid fa-trash text-danger cursor-pointer"
                          onClick={() => handleDelete(book.id, index)}
                        >
                          {/* delete */}
                        </i>
                      </>
                    )}
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
export default BookManagementApp;
