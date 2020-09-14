import React, { createContext, useContext, useReducer } from "react";
//prepares the data layer
export const StateContext = createContext;

// wrap our app and provide tha data layer

export const StateProvider = ({ reducer, initialState, children }) => (
  <StateContext.provider value={useReducer(reducer, initialState)}>
    {children}
  </StateContext.provider>
);

export const useStateValue = () => useContext(contextValue);
