import React from "react";
import { useForm } from "react-hook-form";
function MedicalDeclarationForm() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
  });
  const { errors } = formState;
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">4. Tờ khai báo y tế </h2>
      <div className="ms-5 ">
        <form
          className="w-50"
          noValidate
          // onSubmit={handleSubmit(onSubmit)}
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Họ Tên
            </label>
            <input
              type="text"
              className="form-control"
              id="name"
              placeholder="Tên.."
              {...register("name", {
                required: {
                  value: true,
                  message: "* Hãy nhập tên!",
                },
              })}
            />

            <p className="text-danger fst-italic mt-2">
              {errors.name?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="cmnd" className="form-label">
              Số hộ chiếu /CMND
            </label>
            <input
              type="text"
              className="form-control"
              id="cmnd"
              {...register("cmnd", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập !",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.cmnd?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="yearOfBirth" className="form-label">
              Năm Sinh
            </label>

            <input
              type="text"
              className="form-control"
              id="yearOfBirth"
              placeholder=">1990.."
              {...register("yearOfBirth", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập năm sinh!",
                },
                validate: (value) => {
                  if (value <= 1900) {
                    return "Năm sinh phải lớn hơn 1900";
                  }
                  return true;
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.yearOfBirth?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              Giới Tính
            </label>
            <div className=" ms-3 form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio1"
                value="option1"
              />
              <label className="form-check-label" for="inlineRadio1">
                Nam
              </label>
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                name="gender"
                id="inlineRadio2"
                value="option2"
              />
              <label className="form-check-label" for="inlineRadio2">
                Nữ
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="nationality" className="form-label">
              Quốc Tịch
            </label>

            <input
              type="text"
              className="form-control"
              id="nationality"
              {...register("nationality", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập quốc tịch",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.nationality?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="" className="form-label">
              Công Ty Làm Việc
            </label>

            <input type="text" className="form-control" id="title" />
          </div>
          <div className="mb-3">
            <label htmlFor="workingParts" className="form-label">
              Bộ Phận Làm Việc
            </label>
            <input type="text" className="form-control" id="workingParts" />
          </div>
          <div className="mb-3">
            <div className="form-check">
              <label className="form-check-label" for="defaultCheck1">
                Có Thẻ bảo hiểm y tế
              </label>
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="defaultCheck1"
              />
            </div>
          </div>
          <h3>Địa chỉ liên lạc tại Việt Nam</h3>
          <div className="mb-3">
            <label htmlFor="province" className="form-label">
              Tỉnh Thành
            </label>

            <input
              type="text"
              className="form-control"
              id="province"
              {...register("province", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập tỉnh thành",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.province?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="district" className="form-label">
              Quận /Huyện
            </label>

            <input
              type="text"
              className="form-control"
              id="district"
              {...register("district", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập Quận/Huyện",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.district?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="ward" className="form-label">
              Phường /Xã
            </label>

            <input
              type="text"
              className="form-control"
              id="ward"
              {...register("title", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập Phường Xã!",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.title?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="street" className="form-label">
              Số nhà, phố, tổ dân phố /thôn /đội
            </label>

            <input
              type="text"
              className="form-control"
              id="street"
              {...register("street", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập!",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.street?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Điện Thoại
            </label>

            <input
              type="text"
              className="form-control"
              id="phone"
              {...register("phone", {
                required: {
                  value: true,
                  message: "* Vui lòng nhập số điện thoại",
                },
                pattern: {
                  value:
                    // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    /^\d+$/,
                  message: "* Vui lòng nhập số!",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.phone?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email
            </label>

            <input
              type="email"
              className="form-control"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "* Please enter title",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  // /^\S+@\S+$/i
                  message: "* Không đúng định dạng email",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="visit" className="form-label">
              <h5>
                Trong vòng 14 ngày qua Anh/Chị có đến quốc gia / vùng lãnh thổ
                nào(có thể đi qua nhiều quốc gia)
              </h5>
            </label>

            <input
              type="text"
              className="form-control"
              id="visit"
              {...register("visit", {
                required: {
                  value: true,
                  message: "* vui lòng nhập",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.visit?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <h5>
                Trong vòng 14 ngày qua Anh/Chị có thấy xuất hiện dấu hiệu nào
                sau đây không?
              </h5>
            </label>

            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Sốt
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Ho
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Khó Thở
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Viêm phổi
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Đau Họng
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Mệt mỏi
              </label>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="title" className="form-label">
              <h5>Trong vòng 14 ngày qua Anh/Chị có tiếp xúc với?</h5>
            </label>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Người bệnh hoặc nghi ngờ, mắc bệnh COVID-19
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Người từ nước ngoài có bệnh COVID-19
              </label>
            </div>
            <div className="form-check">
              <input
                className="form-check-input"
                type="checkbox"
                value=""
                id="flexCheckDefault"
              />
              <label className="form-check-label" for="flexCheckDefault">
                Người có biểu hiện (sốt, ho, khó thở, viêm phổi)
              </label>
            </div>
          </div>
          <button
            aria-label="Search"
            type="submit"
            className="btn btn-primary"
            // disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default MedicalDeclarationForm;
