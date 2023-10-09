// import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container">
      <div className="card" style={{ width: "18rem" }}>
        <img
          className="card-img-top"
          src="https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"
          alt="Card image cap"
        />
        <div className="card-body">
          <h5 className="card-title text-center">Ruma Khan</h5>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipis
          </p>
          <a href="#" className="btn btn-primary">
            FOLLOW
          </a>
        </div>
      </div>
    </div>
  );
}

export default App;
