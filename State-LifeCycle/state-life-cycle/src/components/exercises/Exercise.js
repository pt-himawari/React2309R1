import React from "react";
import ExpandCollapse from "../exercises/ComponentExpandCollapse";
import Calculator from "../exercises/Calculator";
import LoginLogoutForm from "../exercises/LoginLogoutForm";
import TodoApp from "./TodoAppcopy";
import StudentApp from "./StudentApp";
import PlayListApp from "./PlayListApp";
function ShowExercise() {
  return (
    <div className="container-fluid mt-5 border border-primar">
      <h1 className="fs-1 text-center text-primary ">Exercises</h1>
      <ExpandCollapse />
      <Calculator />
      <LoginLogoutForm />
      <PlayListApp />
      <TodoApp />

      <StudentApp />
    </div>
  );
}
export default ShowExercise;
