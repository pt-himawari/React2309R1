import { render } from "@testing-library/react";
import React, { Component } from "react";

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputOne: 0,
      inputTwo: 0,
      result: 0,
    };
  }
  handleInputChange = (event, inputName) => {
    this.setState({ [inputName]: parseFloat(event.target.value) });
  };
  handleCalculate = (operation) => {
    const { inputOne, inputTwo } = this.state;
    console.log(operation);
    let newResult = 0;
    if (operation === "+") newResult = inputOne + inputTwo;
    else if (operation === "-") newResult = inputOne - inputTwo;
    else if (operation === "*") newResult = inputOne * inputTwo;
    else if (operation === "/") {
      if (inputTwo !== 0) newResult = inputOne / inputTwo;
      else {
        alert("Không thể chia cho 0");
        return;
      }
    }
    this.setState({ result: newResult });
  };

  render() {
    const { inputOne, inputTwo, result } = this.state;
    return (
      <div className="my-5">
        <h3>2. Calculator</h3>
        <div className="ms-5 my-4">
          <div className="mb-3">
            <input
              type="number"
              value={inputOne}
              onChange={(e) => this.handleInputChange(e, "inputOne")}
              className="form-control  w-25"
            />
          </div>
          <div className="mb-3">
            <input
              type="number"
              value={inputTwo}
              onChange={(e) => this.handleInputChange(e, "inputTwo")}
              className="form-control  w-25"
            />
          </div>
          <p className="fw-bolder fs-2">Result : {result}</p>
          <div className="d-flex">
            {["+", "-", "x", "/"].map((op, index) => (
              <button
                key={index}
                type="submit"
                onClick={() => this.handleCalculate(op)}
                className="btn btn-primary me-3 fs-5 fw-bolder"
              >
                {op}
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  }
}
export default Calculator;
