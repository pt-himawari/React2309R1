import React, { Component } from "react";

class ShowAlertBeforeDeleteComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: true,
    };
  }

  delete = () => {
    this.setState({ display: false });
  };

  render() {
    return (
      <div className="my-5">
        <h3>3. Change Component Before Render (componentWillUnmount)</h3>
        <div className="ms-5 my-3">
          {this.state.display && <ComponentBeforeUnmount />}
          <button
            type="button"
            onClick={this.delete}
            className="btn btn-success"
          >
            Delete the component
          </button>
        </div>
      </div>
    );
  }
}
class ComponentBeforeUnmount extends Component {
  componentWillUnmount() {
    alert("The component is going to be unmounted");
  }
  render() {
    return (
      <h3 className="text-warning mb-4">Show a notice before deleting me</h3>
    );
  }
}

export default ShowAlertBeforeDeleteComponent;
