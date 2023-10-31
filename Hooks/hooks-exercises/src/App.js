import logo from "./logo.svg";
import "./App.css";

import SelectYourCar from "./components/SelectYourCar";
import Timer from "./components/Timer";
import PostListAPIPage from "./components/PostListAPIPage";
function App() {
  return (
    <div className="container border p-5 ">
      <h1 className="text-center mt-4 text-primary">Hooks Exercises</h1>
      <SelectYourCar></SelectYourCar>
      <Timer></Timer>
      <PostListAPIPage />
    </div>
  );
}

export default App;
