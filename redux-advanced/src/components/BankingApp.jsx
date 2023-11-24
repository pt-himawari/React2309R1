import React, { useReducer } from "react";

//1 initstate
const initState = {
  blance: 10,
  amount: 0,
};
//2 . actions laf 1 object
const deposit = {
  type: "bank/deposit",
  payload: 10,
};
const withDraw = {
  type: "bank/withDraw",
  payload: 5,
};
//3 . reduces co 2 param
const reduce = (state, action) => {
  switch (action.type) {
    case "bank/deposit":
      return {
        ...state,
        blance: state.blance + state.amount,
        amount: 0,
      };
    case "bank/withDraw":
      return {
        ...state,
        blance: state.blance - state.amount,
        amount: 0,
      };
    case "bank/changeAmount":
      return {
        ...state,
        amount: action.payload,
      };
    default:
      return { state };
  }
};

const BankingApp = () => {
  const [state, dispatch] = useReducer(reduce, initState);

  console.log(state);
  return (
    <div className=" text-center ">
      <h1 className=" text-center text-cyan-600 mt-3">Banking App</h1>

      <div className="flex justify-center ">
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 h-full">
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="username"
            >
              Amount
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              value={state.amount}
              onInput={(e) => {
                // state.amount = parseInt(e.target.value);
                dispatch({
                  type: "bank/changeAmount",
                  payload: parseInt(e.target.value) || 0,
                });
              }}
            />
          </div>
          <div className="mb-6">
            <h2
              className="block text-gray-700 text-sm font-bold mb-2"
              htmlFor="password"
            >
              Blance : {state.blance}
            </h2>
            {/* <input
              className="shadow appearance-none border  rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              id="password"
              type="password"
              placeholder="******************"
            /> */}
            {/* <p className="text-red-500 text-xs italic">
              Please choose a password.
            </p> */}
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="button"
              onClick={() => {
                dispatch({
                  type: "bank/deposit",
                });

                console.log(state);
              }}
            >
              Deposit
            </button>
            <button
              type="button"
              onClick={() => {
                dispatch({
                  type: "bank/withDraw",
                });

                console.log(state);
              }}
              className=" ms-2 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              withDraw
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default BankingApp;
