import React, { useEffect, useState } from "react";

function TodoList() {
  const [job, setJob] = useState();
  const [tasks, setTasks] = useState([]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/todos?userId=1")
      .then((response) => response.json())
      .then((data) => {
        setTasks(data);
      });
  }, []);
  // console.log(job);
  const handleAdd = () => {
    if (job) {
      const newTask = {
        userId: 1, // Mã người dùng (1 là giả lập)
        id: tasks.length + 1, // Id mới tự động tăng
        title: job, // Sử dụng giá trị job
        completed: false, // Mặc định là chưa hoàn thành
      };
      // them vao giao dien

      fetch("https://jsonplaceholder.typicode.com/todos", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // Các headers khác (nếu cần)
        },
        body: JSON.stringify(newTask), // Chuyển đổi dữ liệu thành JSON
      })
        .then((response) => response.json())
        .then((data) => {
          console.log(data); // Dữ liệu trả về từ API
          setTasks([...tasks, newTask]);
          setJob("");
        });
    }
  };
  return (
    <>
      <div className="flex justify-center  flex-col items-center">
        <h1 className="text-4xl text-emerald-700 font-medium my-6">
          Todo List
        </h1>

        <form className="w-4/12">
          <div className="flex items-center">
            <label
              htmlFor="title"
              className="text-2xl me-4 font-medium text-gray-900 "
            >
              Title
            </label>
            <input
              type="text"
              id="first_name"
              className="w-full  bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 "
              placeholder="Enter task..."
              required
              value={job}
              onChange={(e) => setJob(e.target.value)}
            />
            <button
              type="button"
              className="ms-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
              onClick={handleAdd}
            >
              Add
            </button>
          </div>
        </form>

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mt-8">
          <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-gray-700 text-center uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  ID
                </th>
                <th scope="col" className="px-6 py-3 ">
                  Title
                </th>
                <th scope="col" className="px-6 py-3">
                  status
                </th>

                <th scope="col" className="px-6 py-3">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {tasks.map((task) => (
                <tr
                  key={task.id}
                  className="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
                >
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {task.id}
                  </th>
                  <th
                    scope="row"
                    className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
                  >
                    {task.title}
                  </th>
                  <td className="px-6 py-4">
                    {task.completed ? (
                      <p className="text-sky-600 font-medium">&#10003;</p>
                    ) : (
                      <p className="text-red-700 font-medium">&#10060;</p>
                    )}
                  </td>

                  <td className="px-6 py-4">
                    <a
                      href="#"
                      className="font-medium text-blue-600 dark:text-blue-500 hover:underline"
                    >
                      Edit
                    </a>
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

export default TodoList;
