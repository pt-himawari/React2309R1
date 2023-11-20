import React, { useState, useEffect } from "react";
function BooksManage() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [bookList, setBookList] = useState([]);
  const [selectIndex, setSelectIndex] = useState(null);
  const [editValue, setEditValue] = useState();
  useEffect(() => {
    fetch("https://my-json-server.typicode.com/codegym-vn/mock-api-books/books")
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setBookList(data);
      });
  }, []);

  const toggleForm = () => {
    setIsFormOpen(!isFormOpen);
  };
  // toggle button edit
  const toggleEdit = (book, index) => {
    console.log("Da click");
    setSelectIndex(index);
    setEditValue(book);
    console.log(index);
    console.log("edit value", editValue);
  };
  // delete
  const handleDelete = (id, index) => {
    const userConfirmed = window.confirm(
      "Are you sure you want to delete this book?"
    );
    if (userConfirmed) {
      setBookList((preBooks) => preBooks.filter((item, i) => i != index));
      fetch(
        `https://my-json-server.typicode.com/codegym-vn/mock-api-books/books/${id}`,
        {
          method: "DELETE",
          headers: { "Content-Type": "application/json" },
        }
      )
        .then((response) => response.json())
        .then((data) => {
          console.log("Delete ok");
        });
    }
  };

  return (
    <>
      <h1 className="text-5xl text-center text-emerald-700 font-medium my-6 ">
        BooksManage
      </h1>
      <div className=" flex  flex-col items-center">
        <div className=" w-1/2  flex justify-between  items-center">
          <h1 className="text-4xl text-emerald-700 font-medium my-6">
            Library
          </h1>

          <button
            className="  bg-green-500 ms-5  hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            onClick={toggleForm}
          >
            {isFormOpen ? "Close Form" : "Add a new Book"}
          </button>
        </div>
        {isFormOpen && (
          <form className="w-1/2  ">
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="title"
                >
                  Title
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="title"
                  type="text"
                  placeholder="Enter title book.."
                />
              </div>
            </div>
            <div className="md:flex md:items-center mb-6">
              <div className="md:w-1/3">
                <label
                  className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4"
                  for="quantity"
                >
                  Quantity
                </label>
              </div>
              <div className="md:w-2/3">
                <input
                  className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500"
                  id="quantity"
                  type="number"
                  placeholder="0"
                />
              </div>
            </div>

            <div className="md:flex md:items-center">
              <div className="md:w-1/3"></div>
              <div className="md:w-2/3">
                <button
                  className="shadow bg-purple-500 hover:bg-purple-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                  type="button"
                >
                  Add
                </button>
                <button className="ms-5 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                  Cancel
                </button>
              </div>
            </div>
          </form>
        )}

        <div class="relative mt-5 overflow-x-auto shadow-md sm:rounded-lg">
          <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="px-6 py-3">
                  id
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Title
                </th>
                <th scope="col" class="px-6 py-3">
                  Quantity
                </th>
                <th scope="col" class="px-6 py-3 text-center">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody>
              {bookList.map((book, index) => (
                <tr
                  key={book.id}
                  class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
                >
                  <th
                    scope="row"
                    class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {book.id}
                  </th>
                  {index == selectIndex ? (
                    <>
                      <td>
                        <input
                          value={editValue.title}
                          onChange={(e) =>
                            setEditValue({
                              ...editValue,
                              title: e.target.value,
                            })
                          }
                          className="dark:bg-gray-800 dark:border-gray-700 px-6 py-4"
                        />
                      </td>
                      <td>
                        <input
                          value={editValue.quantity}
                          onChange={(e) =>
                            setEditValue({
                              ...editValue,
                              quantity: e.target.value,
                            })
                          }
                          className="dark:bg-gray-800 dark:border-gray-700 px-6 py-4"
                        />
                      </td>
                    </>
                  ) : (
                    <>
                      <td class="px-6 py-4">{book.title}</td>
                      <td class="px-6 py-4 text-center">{book.quantity}</td>
                    </>
                  )}

                  <td class="px-6 py-4 flex">
                    {index == selectIndex ? (
                      <>
                        <button className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
                          Save
                        </button>
                        <button
                          onClick={() => {
                            console.log("ok");
                            setSelectIndex(null);
                          }}
                          className=" ms-4  bg-amber-500 hover:bg-amber-800 text-white font-bold py-2 px-4 rounded"
                        >
                          Cancle
                        </button>
                      </>
                    ) : (
                      <>
                        <button
                          className=" bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
                          onClick={() => toggleEdit(book, index)}
                        >
                          Edit
                        </button>
                      </>
                    )}

                    <button
                      onClick={() => handleDelete(book.id, index)}
                      className=" ms-2 bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
}

export default BooksManage;
