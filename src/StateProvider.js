import react, { createContext, useContext, useReducer } from "react";

export const stateContext = createContext();

export const StateProvider = ({ initiaState, reducer, children }) => (
  <stateContext.Provider value={useReducer(reducer, initiaState)}>
    {children}
  </stateContext.Provider>
);

export const useStateValue = () => useContext(stateContext);
