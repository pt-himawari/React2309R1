import React from "react";

import { useForm } from "react-hook-form";

function MailForm() {
  const { handleSubmit, register, formState } = useForm({
    mode: "onBlur",
    criteriaMode: "all",
  });
  const onSubmit = (data) => {
    window.alert("Sent successfully!");
  };
  const { isDirty, isValid, errors } = formState;
  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">3. Mail Form : </h2>
      <div className="ms-5 fs-3 ">
        <form className="w-50" noValidate onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">
              To
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
              })}
            />
            <p className="text-danger fst-italic mt-2">
              {errors.email?.message}
            </p>
          </div>
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
            {errors.title && (
              <p className="text-danger fst-italic mt-2">
                {errors.title.message}
              </p>
            )}
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
          <div class="mb-3">
            <label for="formFileMultiple" class="form-label">
              Upload files
            </label>
            <input
              class="form-control"
              type="file"
              id="formFileMultiple"
              multiple
            />
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
export default MailForm;
