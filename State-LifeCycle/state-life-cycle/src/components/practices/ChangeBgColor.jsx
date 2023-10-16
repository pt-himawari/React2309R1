import React, { Component } from "react";
class ChangeBgColor extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "black",
    };
  }
  // hàm  componentDidMount là một method có sẵn trong React.Component
  // nó sẽ thực hiện thay đổi sau khi render lần 1
  // đối lập với hàm này sẽ là componentWillUnmount()

  componentDidMount() {
    // để thể hiện sự thay đổi này dùng hàm setTimout để thể hiện sự thay đổi náy
    setTimeout(() => {
      this.setState({ color: "red" });
    }, 2000);
  }
  render() {
    return (
      <div className="my-5">
        <h3>2. Change Background Color (componentDidMount)</h3>

        <div
          className="ms-5 my-3"
          style={{
            backgroundColor: `${this.state.color}`,
            width: "100px",
            height: "100px",
          }}
        ></div>
      </div>
    );
  }
}
export default ChangeBgColor;
