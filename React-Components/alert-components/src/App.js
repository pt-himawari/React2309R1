// import logo from "./logo.svg";
import "./App.css";
import Alert from "./components/Alert";
import "bootstrap/dist/css/bootstrap.css";

function App() {
  return (
    <div className="alert alert-warning" role="alert">
      <Alert text={"heloo"} />
    </div>
  );
}

export default App;
