import React, { useEffect, useState, useRef } from "react";
import { useForm } from "react-hook-form";

let render1 = 0;
function BookManagementApp() {
  //--------------- Validation form --------------------------
  const { handleSubmit, register, formState, reset } = useForm({
    mode: "onBlur", // khi di chuyển và blur ra ngoài nút input thì bắt lỗi luôn
    criteriaMode: "all",
  });

  //--------------- phần CRUD --------------------------------
  // call api
  useEffect(() => {
    fetch("http://localhost:3000/library")
      .then((response) => response.json())
      .then((library) => {
        setBooks(library);
        // setBooks(post.data);
      });
  }, []);
  // khai báo các state cần dùng
  // const [formData, setFormData] = useState({ title: "", quantity: 0 });
  const [books, setBooks] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const [editValue, setEditValue] = useState({ title: "", quantity: 0 });
  const inputTitleRef = useRef(null);
  const inputQuantityRef = useRef(null);

  const onSubmit = (data) => {
    console.log("hello");
    console.log(data);
    // 1. Cập nhật trạng thái giao diện
    setBooks([...books, data]);
    // 2. Gửi yêu cầu API
    fetch("http://localhost:3000/library", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((response) => {});

    // 4. Đặt lại biểu mẫu
    reset();
    // reset({
    //   title: "new value",
    // });
  };
  // xoá
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
    if (editValue.title == "" || editValue.quantity == 0) {
      if (editValue.title === "") {
        inputTitleRef.current.focus();
      } else {
        if (editValue.quantity == 0) {
          inputQuantityRef.current.focus();
        }
      }
    } else {
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
    }
  };
  render1++;
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">2.Book Management App : {render1} </h2>
      <div className="ms-5 fs-3 ">
        {/* form */}
        <form className="w-50" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Title
            </label>
            <input
              type="text"
              className="form-control"
              id="title"
              placeholder="Enter title..."
              {...register("title", {
                required: {
                  value: true,
                  message: "* Please enter title",
                },
              })}
            />
            {formState.errors.title && (
              <p className="text-danger fst-italic mt-2">
                {formState.errors.title.message}
              </p>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Quantity
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter quantity..."
              id="quantity"
              {...register("quantity", {
                required: {
                  value: true,
                  message: "* Please enter quantity ",
                },
                pattern: {
                  value:
                    // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    /^\d+$/,
                  message: "* Invalid number format!",
                },
              })}
            />
            {formState.errors.quantity && (
              <p className="text-danger fst-italic mt-2">
                {formState.errors.quantity.message}
              </p>
            )}
          </div>
          <button type="submit" className="btn btn-primary mb-3">
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
                        ref={inputTitleRef}
                        onChange={(e) =>
                          setEditValue({ ...editValue, title: e.target.value })
                        }
                      />
                      <p className="text-danger fst-italic mt-2">
                        {editValue.title !== ""
                          ? ""
                          : "* Please fill out this field"}
                      </p>
                    </td>
                    <td>
                      <input
                        type="number"
                        value={editValue.quantity}
                        ref={inputQuantityRef}
                        onChange={(e) =>
                          setEditValue({
                            ...editValue,
                            quantity: e.target.value,
                          })
                        }
                      />
                      <p className="text-danger fst-italic mt-2">
                        {editValue.quantity > 0
                          ? ""
                          : "* Please fill out this field"}
                      </p>
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
