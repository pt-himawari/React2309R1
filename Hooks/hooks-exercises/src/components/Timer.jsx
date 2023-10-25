import React, { useState, useEffect } from "react";

function Timer() {
  const [countdown, setCountdown] = useState(3);
  useEffect(() => {
    console.log(countdown);
    if (countdown === 0) {
      // alert("Time's up!");
      return;
    }
    let timerID;
    if (countdown > 0) {
      timerID = setInterval(() => {
        setCountdown((prevState) => prevState - 1);
      }, 1000);
    }
    // } else {
    //   window.alert("Time's up!");
    // }

    return () => clearInterval(timerID);
  }, [countdown]);

  return (
    <div className="border p-5">
      <h2 className="text-info mb-3">2. Countdown Timer</h2>
      <div className="ms-5 fs-3 ">
        Show :{" "}
        <h3 className="text-danger d-inline ">
          {countdown} {!countdown && "Time's Up"}
        </h3>
      </div>
    </div>
  );
}
export default Timer;
