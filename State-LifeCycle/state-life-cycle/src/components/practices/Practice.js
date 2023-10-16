import React from "react";
import DecreaseIncrease from "../practices/DecreaseIncrease";
import ChangeBgColor from "../practices/ChangeBgColor";
import ShowAlertBeforeDeleteComponent from "../practices/ChangeComponentBeforRender";
function ShowPractices() {
  return (
    <div className="container-fluid mt-5 border border-primar">
      <h1 className="fs-1 text-center text-primary ">Practices</h1>
      {/* Count Numbers */}
      <DecreaseIncrease />
      <ChangeBgColor />
      <ShowAlertBeforeDeleteComponent />
    </div>
  );
}
export default ShowPractices;
