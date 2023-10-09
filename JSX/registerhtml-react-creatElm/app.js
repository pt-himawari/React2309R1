// const h1 = React.createElement("h1", null, "Hello world");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(h1);
//
const loginForm = React.createElement(
  "section",
  {
    className: "vh-100",
    style: {
      backgroundColor: "rgb(238, 238, 238)",
    },
  },
  React.createElement(
    "div",
    {
      className: "container h-100",
    },
    React.createElement(
      "div",
      {
        className: "row d-flex justify-content-center align-items-center h-100",
      },
      React.createElement(
        "div",
        {
          className: "col-lg-12 col-xl-7",
        },
        React.createElement(
          "div",
          {
            className: "card text-black",
            style: {
              borderRadius: "25px",
            },
          },
          React.createElement(
            "div",
            {
              className: "card-body p-md-5",
            },
            React.createElement(
              "div",
              {
                className: "row justify-content-center",
              },
              React.createElement(
                "div",
                {
                  className: "col-md-10 col-lg-7 col-xl-5 order-2 order-lg-1",
                },
                React.createElement(
                  "p",
                  {
                    className: "text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4",
                  },
                  "Sign Up"
                ),
                React.createElement(
                  "form",
                  {
                    className: "mx-1 mx-md-4",
                  },
                  React.createElement(
                    "div",
                    {
                      className: "d-flex flex-row align-items-center mb-4",
                    },
                    React.createElement(
                      "label",
                      {
                        className: "form-label",
                        for: "name",
                      },
                      React.createElement("i", {
                        className: "fas fa-user fa-lg me-3 fa-fw",
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "form-outline flex-fill mb-0",
                      },
                      React.createElement("input", {
                        className: "form-control",
                        id: "name",
                        type: "text",
                        placeholder: "Your Name",
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "d-flex flex-row align-items-center mb-4",
                    },
                    React.createElement(
                      "label",
                      {
                        className: "form-label",
                        for: "email",
                      },
                      React.createElement("i", {
                        className: "fas fa-envelope fa-lg me-3 fa-fw",
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "form-outline flex-fill mb-0",
                      },
                      React.createElement("input", {
                        className: "form-control",
                        id: "email",
                        type: "email",
                        placeholder: "Your Email",
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "d-flex flex-row align-items-center mb-4",
                    },
                    React.createElement(
                      "label",
                      {
                        className: "form-label",
                        for: "pass",
                      },
                      React.createElement("i", {
                        className: "fas fa-lock fa-lg me-3 fa-fw",
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "form-outline flex-fill mb-0",
                      },
                      React.createElement("input", {
                        className: "form-control",
                        id: "pass",
                        type: "password",
                        placeholder: "Your Password",
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    {
                      className: "d-flex flex-row align-items-center mb-4",
                    },
                    React.createElement(
                      "label",
                      {
                        className: "form-label",
                        for: "repeatPass",
                      },
                      React.createElement("i", {
                        className: "fas fa-key fa-lg me-3 fa-fw",
                      })
                    ),
                    React.createElement(
                      "div",
                      {
                        className: "form-outline flex-fill mb-0",
                      },
                      React.createElement("input", {
                        className: "form-control",
                        id: "repeatPass",
                        type: "password",
                        placeholder: "Repeat your Password",
                      })
                    )
                  ),
                  React.createElement(
                    "div",
                    {
                      className:
                        "d-flex justify-content-center mx-4 mb-3 mb-lg-4",
                    },
                    React.createElement(
                      "button",
                      {
                        className: "btn btn-primary btn-lg",
                        type: "button",
                      },
                      "Register"
                    )
                  )
                )
              )
            )
          )
        )
      )
    )
  )
);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(loginForm);
