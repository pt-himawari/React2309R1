import React from "react";
import "./App.css";
import ShowPractices from "./components/practices/Practice.js";
import ShowExercise from "./components/exercises/Exercise.js";

function App() {
  return (
    <div className="container">
      <h1 className="text-center my-3 text-dark-emphasis">
        State & Lifecycle Method
      </h1>
      <ShowPractices />
      <ShowExercise />
    </div>
  );
}

export default App;
