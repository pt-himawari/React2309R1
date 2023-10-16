// import React from "react";
// import { Component } from "react";
import React, { Component } from "react";

class DecreaseIncrease extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
    };
  }
  decrease() {
    this.setState({ number: this.state.number - 1 });
  }
  increase = () => {
    this.setState({ number: this.state.number + 1 });
  };
  render() {
    return (
      <div className="my-5">
        <h3>1 .Count Numbers</h3>
        <div className="ms-5 my-4">
          <button
            type="button"
            onClick={() => this.decrease()}
            className="btn btn-primary "
          >
            Decrease
          </button>
          <span className="mx-5 fs-2 fw-bold">{this.state.number}</span>
          <button
            type="button"
            onClick={this.increase}
            className="btn btn-success"
          >
            Increase
          </button>
        </div>
      </div>
    );
  }
}

export default DecreaseIncrease;
