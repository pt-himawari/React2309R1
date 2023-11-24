import React, { useReducer } from "react";
import { useContext, createContext } from "react";
import { initState, reducer } from "../reducer/reducer";
// 1 . createContext
// 2. provider
// 3. consumer
export const ShoeContext = createContext();
const ShoeProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initState);

  return (
    <ShoeContext.Provider value={{ state, dispatch }}>
      {children}
    </ShoeContext.Provider>
  );
};

export default ShoeProvider;
