import React, { Component } from "react";
class ExpandCollapse extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isExpand: false,
    };
  }
  handlerExpandCollapse = () => {
    this.setState({ isExpand: !this.state.isExpand });
  };

  render() {
    return (
      <div className="my-5">
        <h3>1. Conditional Rendering</h3>
        <div className="ms-5 my-3">
          <button
            type="button"
            onClick={this.handlerExpandCollapse}
            className="btn btn-success mb-4"
          >
            {this.state.isExpand == true ? "Hide" : "Show"}
          </button>
          {this.state.isExpand == true ? (
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Consectetur, quas! Dolorem amet consequuntur iusto vero eveniet
              natus quasi? Cupiditate ea eaque, modi, doloribus omnis repellat
              magnam sunt impedit accusantium similique porro? Vitae recusandae
              accusamus saepe commodi.
            </p>
          ) : (
            ""
          )}
        </div>
      </div>
    );
  }
}
export default ExpandCollapse;
