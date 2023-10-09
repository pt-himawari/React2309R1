const loginForm = (
  <section
    className="vh-100"
    style={{
      backgroundColor: "rgb(238, 238, 238)",
    }}
  >
    <div className="container h-100">
      <div className="row d-flex justify-content-center align-items-center h-100">
        <div className="col-lg-12 col-xl-7">
          <div className="card text-black" style={{ borderRadius: "25px" }}>
            <div className="card-body p-md-5">
              <div className="row justify-content-center">
                <div className="col-md-10 col-lg-7 col-xl-5 order-2 order-lg-1">
                  <p className="text-center h1 fw-bold mb-5 mx-1 mx-md-4 mt-4">
                    Sign Up
                  </p>
                  <form className="mx-1 mx-md-4">
                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" for="name">
                        <i className="fas fa-user fa-lg me-3 fa-fw"></i>
                      </label>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          id="name"
                          type="text"
                          placeholder="Your Name"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" for="email">
                        <i className="fas fa-envelope fa-lg me-3 fa-fw"></i>
                      </label>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          id="email"
                          type="email"
                          placeholder="Your Email"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" for="pass">
                        <i className="fas fa-lock fa-lg me-3 fa-fw"></i>
                      </label>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          id="pass"
                          type="password"
                          placeholder="Your Password"
                        />
                      </div>
                    </div>
                    <div className="d-flex flex-row align-items-center mb-4">
                      <label className="form-label" for="repeatPass">
                        <i className="fas fa-key fa-lg me-3 fa-fw"></i>
                      </label>
                      <div className="form-outline flex-fill mb-0">
                        <input
                          className="form-control"
                          id="repeatPass"
                          type="password"
                          placeholder="Repeat your Password"
                        />
                      </div>
                    </div>
                    <div className="d-flex justify-content-center mx-4 mb-3 mb-lg-4">
                      <button className="btn btn-primary btn-lg" type="button">
                        Register
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(loginForm);
// const loginForm = ReactDOM.create
