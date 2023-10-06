const modal = document.getElementById("contactModal");
const btnAdd = document.getElementById("btnAddNewContact");
const btnUpdate = document.getElementById("btnUpdateContact");
const labelAdd = document.getElementById("contactModalLabelAdd");
const labelUpdate = document.getElementById("contactModalLabelUpdate");
// thẻ input ảnh
const contactForm = document.getElementById("contactForm");
const imageInput = document.getElementById("imageInput");
const nameInput = document.querySelector('input[name="name"]');
const idInput = document.querySelector('input[name="id"]');
// const avatar = document.querySelector('input[name="avatar"]');
const mobile = document.querySelector('input[name="mobile"]');
const email = document.querySelector('input[name="email"]');
// nut tim kiếm
const searchInput = document.getElementById("searchInput");
const searchButton = document.getElementById("searchButton");
// api
const contactApi = "http://localhost:3000/contact";
function init() {
  getContact(renderContacts);
}
init();
// gửi request  API
function apiRequest(callback, method, Api, data) {
  const options = {
    method: method,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  };
  fetch(Api, options)
    .then(function (response) {
      return response.json();
    })
    .then(callback);
}
// Read: đọc  get data from json server
function getContact(callback) {
  apiRequest(callback, "GET", contactApi);
}
// render contact table
function renderContacts(contacts) {
  let htmls = contacts.map(function (contact) {
    return `<tr class="contact-item-${contact.id}">
    <th scope="row">
      <div class="form-check">
        <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" />
      </div>
    </th>
    <td class="align-middle">${contact.name}</td>
    <td><img src="${contact.avatar}" class="img-fluid rounded-circle"  width="50" height="50" alt="Avatar" ></td>
    <td>${contact.mobile}</td>
    <td>${contact.email}</td>
    
    <td >
      <div class="d-flex align-items-center h-100 fs-5">
        <i class="fa fa-edit me-2 cursor-pointer " onclick="showModalUpdate(${contact.id})"	data-bs-toggle="modal" data-bs-target="#contactModal"></i>
        <i class="material-icons cursor-pointer" onclick="handleDeleteContact(${contact.id})">delete</i>
      </div>
    </td>
  </tr>`;
  });
  document.querySelector(".table>tbody").innerHTML = htmls.join("");
}
// xử lý form khi gửi submit
contactForm.addEventListener("submit", function (e) {
  e.preventDefault(); // Ngăn chặn gửi form mặc định
  // nút submit thêm
  if (btnAdd && btnAdd.clicked) {
    handleAddContact();
  }
  // nút submit cập nhật
  if (btnUpdate && btnUpdate.clicked) {
    handelUpdateContact(idInput.value);
  }
  $("#contactModal").modal("hide");
});

btnAdd.addEventListener("click", function () {
  btnAdd.clicked = true;
});
btnUpdate.addEventListener("click", function () {
  btnUpdate.clicked = true;
});
// hàm add  gửi lên nút add submit
// add new contact
function handleAddContact() {
  const selectedFile = imageInput.files[0];
  let selectedImagePath = "./assets/images/default.png";
  if (selectedFile) {
    const destinationPath = "./assets/images/";
    selectedImagePath = destinationPath + selectedFile.name;
    console.log("Đã chọn ảnh:", selectedImagePath);
  }
  let formContact = {
    name: nameInput.value,
    avatar: selectedImagePath,
    mobile: mobile.value,
    email: email.value,
  };
  // post chức năng thêm mới -> API
  apiRequest(getContact(renderContacts), "POST", contactApi, formContact);
}
// hàm update gửi lên nút update submit
function handelUpdateContact(id) {
  const updatedData = {
    name: nameInput.value,
    avatar: "./assets/images/default.png",
    mobile: mobile.value,
    email: email.value,
  };
  const updateApi = contactApi + "/" + id;
  // PUT sửa / update dữ liệu -> API
  apiRequest(getContact(renderContacts), "PUT", updateApi, updatedData);
}
// remove contact
function handleDeleteContact(id) {
  let confirm = window.confirm("Are you sure to remove this contact?");
  if (confirm) {
    const deleteApi = contactApi + "/" + id;
    apiRequest(getContact(renderContacts), "DELETE", deleteApi);
  }
}
//
function showModalUpdate(id) {
  labelAdd.classList.add("d-none");
  btnAdd.classList.add("d-none");
  btnUpdate.classList.remove("d-none");
  labelUpdate.classList.remove("d-none");
  renderModal(id);
}
// đưa dữ  liệu lên modal
function renderModal(id) {
  getContact(function (contacts) {
    let contact = contacts.find(function (ct) {
      return ct.id === id;
    });
    nameInput.value = contact.name;
    idInput.value = contact.id;
    // nameInput
    // imageInput.value = contact.avatar;
    mobile.value = contact.mobile;
    email.value = contact.email;
  });
}
// nút showModal khi thêm mới
function showModalAdd() {
  nameInput.value = "";
  imageInput.value = "";
  mobile.value = "";
  email.value = "";
  labelAdd.classList.remove("d-none");
  btnAdd.classList.remove("d-none");
  btnUpdate.classList.add("d-none");
  labelUpdate.classList.add("d-none");
}
// chức năng tìm kiếm
searchButton.addEventListener("click", function () {
  const keyword = searchInput.value.toLowerCase();
  console.log(searchInput.value.toLowerCase());
  searchContacts(keyword);
});
// thẻ input khi nhấn enter sẽ tìm kiếm
searchInput.addEventListener("keydown", function (event) {
  if (event.key === "Enter") {
    const searchTerm = searchInput.value.toLowerCase();
    searchContacts(searchTerm);
  }
});

// // tìm kiếm theo tất cả các trường
// function searchContacts(searchTerm) {
//   const searchAPI = contactApi + "?q=" + searchTerm;
//   apiRequest(renderContacts, "GET", searchAPI);
// }

// tìm kiếm theo một trường
// function searchContacts(searchTerm) {
//   const searchAPI = contactApi + "?name_like=" + searchTerm;
//   // apiRequest(renderContacts, "GET", searchAPI);

//   apiRequest(
//     function (data) {
//       renderContacts(data);
//       console.log(data);
//     },
//     "GET",
//     searchAPI
//   );
// }

//tìm kiếm theo nhiều trường
function searchContacts(searchTerm) {
  apiRequest(
    // kéo data về
    function (response) {
      // dùng data lọc mảng theo  điều kiện
      let searchResult = response.filter((user) => {
        return (
          user.name.toLowerCase().includes(searchTerm) ||
          user.mobile.toLowerCase().includes(searchTerm) ||
          user.email.toLowerCase().includes(searchTerm)
        );
      });
      // sau khi lọc theo điều kiện thì truyền vào hàm render ra dữ liệu
      renderContacts(searchResult);
    },
    "GET",
    contactApi
  );
}
