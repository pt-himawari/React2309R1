import React from "react";
import { useForm } from "react-hook-form";
let render = 0;

function ContactForm() {
  // console.log(useForm());
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur", // khi di chuyển và blur ra ngoài nút input thì bắt lỗi luôn
    criteriaMode: "all",
  });
  const { isDirty, isValid, errors } = formState;
  //isDirty : nếu có một trường nào không có sự thay đổi thì nó là false,
  //isValid : đáp ứng tất cả các validation nếu có 1 trường sai nó trả về false

  const onSubmit = (data) => {};

  render++;
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">1. Form Contact </h2>
      <h2 className="text-info mb-3">Compnent render :{render}</h2>

      <div className="ms-5 fs-3 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
          className="form-control"
          noValidate
        >
          <div className="mb-3">
            <label htmlFor="name" className="form-label">
              Name
            </label>
            <input
              type="text"
              className="form-control"
              placeholder="Enter name..."
              aria-describedby="emailHelp"
              id="name"
              // name={name}
              // ref={ref}
              // onChange={onChange}
              // onBlur={onBlur}
              {...register("name", {
                required: {
                  value: true,
                  message: "* Please enter your name",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.name?.message}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              Email address
            </label>
            <input
              type="email"
              className="form-control"
              placeholder="Enter email..."
              aria-describedby="emailHelp"
              id="email"
              {...register("email", {
                required: {
                  value: true,
                  message: "* Please enter your email!",
                },
                pattern: {
                  value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                  // /^\S+@\S+$/i
                  message: "* Invalid email format!",
                },
                validate: {
                  notAdmin: (fieldValue) => {
                    return (
                      fieldValue !== "admin@gmail.com" ||
                      "Enter a different email address"
                    );
                  },
                  notBlackListed: (fieldValue) => {
                    return (
                      !fieldValue.endsWith("baddomain.com") ||
                      "This domain is not supported"
                    );
                  },
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.email?.message}
            </p>
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">
              Phone
            </label>
            <input
              type="text"
              placeholder="Enter phone number..."
              className="form-control"
              id="phone"
              {...register("phone", {
                required: {
                  value: true,
                  message: "* Please enter your phone number!",
                },
                pattern: {
                  value:
                    // /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/,
                    /^\d+$/,
                  message: "* Invalid phone number format!",
                },
                min: {
                  value: 9, // Số tối thiểu
                  message: "Must have at least 9 digits ",
                },
                max: {
                  value: 12, // Số tối đa
                  message: "Maximum 12 digits",
                },
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.phone?.message}
            </p>
          </div>

          <div className="mb-3">
            <label htmlFor="message" className="form-label">
              Message
            </label>
            <textarea
              className="form-control"
              id="message"
              rows="4"
              {...register("message", {
                required: {
                  value: true,
                  message: "* Please enter a message!",
                },
              })}
            ></textarea>
            <p className="text-danger fst-italic mt-2">
              {errors.message?.message}
            </p>
          </div>
          <button
            aria-label="Search"
            type="submit"
            className="btn btn-primary"
            disabled={!isDirty || !isValid}
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}
export default ContactForm;
