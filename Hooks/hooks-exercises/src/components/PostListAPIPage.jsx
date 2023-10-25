import React, { useState, useEffect, useMemo } from "react";
function PostListAPIPage() {
  const [postList, setPostList] = useState([]);
  const [page, setPage] = useState(1);
  // Tạo một mảng chứa các số trang từ 1 đến totalPages
  let totalPages = 6; // Tổng số trang
  const pagesPerPage = 3; // Số trang hiển thị mỗi lần

  useEffect(() => {
    fetch(`https://js-post-api.herokuapp.com/api/posts?_page=${page}`)
      // fetch("https://js-post-api.herokuapp.com/api/posts?_page=2")
      .then((response) => response.json()) // Chuyển dữ liệu nhận được thành đối tượng JSON
      .then((post) => {
        setPostList(post.data);
      });
  }, [page]);
  // Tính toán số lượng nhóm trang dựa trên tổng số trang và số trang trên mỗi lần
  const totalPageGroups = Math.ceil(totalPages / pagesPerPage);
  // console.log("totalPageGroups : " + totalPageGroups);

  // const totalPageGroups = useMemo(() => {
  //   console.log("totalPageGroups : ");

  //   return Math.ceil(totalPages / pagesPerPage);
  // }, []);

  // Tính toán nhóm trang hiện tại
  const currentPageGroup = Math.ceil(page / pagesPerPage);
  // console.log("currentPageGroup : " + currentPageGroup);

  // const currentPageGroup = useMemo(() => {
  //   console.log("currentPageGroup : ");
  //   return Math.ceil(page / pagesPerPage);
  // }, [page]);
  // Tạo mảng chứa số trang trong nhóm hiện tại
  const pageNumbersInGroup = Array.from(
    { length: pagesPerPage },
    (_, i) => i + 1 + (currentPageGroup - 1) * pagesPerPage
  );
  // const pageNumbersInGroup = useMemo(() => {
  //   console.log("pageNumbersInGroup hien lan ");

  //   return Array.from(
  //     { length: pagesPerPage },
  //     (_, i) => i + 1 + (currentPageGroup - 1) * pagesPerPage
  //   );
  // }, [currentPageGroup]);

  console.log("totalPages :" + totalPages);
  const handelPrevious = (e) => {
    e.preventDefault();
    if (page >= 0) {
      setPage(page - 1);
    }
  };
  const handelNext = (e) => {
    e.preventDefault();
    setPage(page + 1);
  };

  return (
    <div className="card my-3">
      <nav aria-label="Page navigation example">
        <ul className="pagination justify-content-center">
          <li className={`page-item ${page < 2 ? "disabled" : ""} `}>
            <a
              className="page-link"
              href="#"
              tabindex="-1"
              aria-disabled="true"
              onClick={handelPrevious}
            >
              Previous
            </a>
          </li>
          {pageNumbersInGroup.map((pageNumber) => (
            <li
              key={pageNumber}
              className={`page-item ${pageNumber === page ? "active" : ""}`}
            >
              <a
                className="page-link"
                href="#"
                onClick={() => setPage(pageNumber)}
              >
                {pageNumber}
              </a>
            </li>
          ))}

          <li className={`page-item ${page == totalPages ? "disabled" : ""} `}>
            <a className="page-link" href="#" onClick={handelNext}>
              Next
            </a>
          </li>
        </ul>
      </nav>
      {postList.map((postListItem) => (
        <div className="card-body">
          <img
            src={postListItem.imageUrl}
            className="card-img-top mb-2"
            alt="..."
          />
          <h5 className="card-title">{postListItem.title}</h5>
          <p className="card-text">{postListItem.description}</p>
          <p className="card-text">
            <small className="text-muted">Last updated 3 mins ago</small>
          </p>
        </div>
      ))}
    </div>
  );
}
export default PostListAPIPage;
