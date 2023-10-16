import React, { Component } from "react";
const loginList = [
  {
    id: 1,
    email: "phamthuong.bs@gmail.com",
    pass: "123456",
  },
  {
    id: 1,
    email: "tructam.bs@gmail.com",
    pass: "123456",
  },
];
class LoginLogoutForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: "",
      isRemember: false,
      isVaild: false,
      isLoggedIn: false,
    };
  }
  handleInputChange = (event) => {
    const { name, value } = event.target;
    // lay value cua nut input
    this.setState({ [name]: value });
  };
  // Định nghĩa hàm kiểm tra thông tin đăng nhập
  checkValidForm(email, password) {
    return loginList.some(
      (user) => user.email === email && user.pass === password
    );
  }

  // Định nghĩa hàm xử lý sự kiện đăng nhập
  handleLogin = () => {
    const { email, password } = this.state;

    const isLoginValid = this.checkValidForm(email, password);

    if (isLoginValid) {
      this.setState({ isLoggedIn: true, isVaild: true });
    } else {
      this.setState({ isVaild: false });
    }
  };
  render() {
    const { email, password } = this.state;

    return (
      <div className="w-50    my-5">
        <h3>3. Login Logout Form</h3>
        <div className="ms-5 my-4 border p-5">
          <form>
            <div className="form-outline mb-4">
              <input
                type="email"
                name="email"
                value={email}
                onChange={this.handleInputChange}
                className="form-control"
                placeholder="Email address"
              />
              <label>show:{this.state.email}</label>
            </div>

            <div className="form-outline mb-4">
              <input
                type="password"
                name="password"
                value={password}
                onChange={this.handleInputChange}
                placeholder="Password"
                className="form-control"
              />
              <label>show:{this.state.password}</label>
            </div>

            <div className="row mb-4">
              <div className="col d-flex justify-content-center ">
                <div className="form-check">
                  <input
                    type="checkbox"
                    name="isRemember"
                    value={this.state.isRemember}
                    // checked={this.state.isRemember}
                    onChange={this.handleInputChange}
                    className="form-check-input"
                  />

                  <label className="form-check-label">Remember me</label>
                  <br />
                  <label>show:{this.state.isRemember}</label>
                </div>
              </div>

              <div className="col">
                <a href="#!">Forgot password?</a>
              </div>
            </div>

            <button
              type="button"
              className="btn  btn-primary btn-block mb-4 w-100"
            >
              Sign in
            </button>

            <div className="text-center">
              <p>
                Not a member? <a href="#!">Register</a>
              </p>
              <p>or sign up with:</p>
              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-facebook-f"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-google"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-twitter"></i>
              </button>

              <button type="button" className="btn btn-link btn-floating mx-1">
                <i className="fab fa-github"></i>
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
export default LoginLogoutForm;
