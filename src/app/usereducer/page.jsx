"use client";

import { useReducer } from "react";
import React from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.payload };
    case "decrement":
      return { ...state, count: state.count - action.payload };
    case "double":
      return { ...state, count: state.count * 2 };
    case "half":
      return { ...state, count: state.count / 2 };
    default:
      throw new Error(`Unhandled action type: ${action.type}`);
  }
}

export default function UseReducerPage() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <>
      <div>UseReducer Page</div>
      <h2>Count: {state.count}</h2>
      <button onClick={() => dispatch({ type: "increment", payload: 1 })}>
        Up
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 1 })}>
        Down
      </button>
      <button onClick={() => dispatch({ type: "increment", payload: 10 })}>
        Up +10
      </button>
      <button onClick={() => dispatch({ type: "decrement", payload: 10 })}>
        Down -10
      </button>
      <button onClick={() => dispatch({ type: "double" })}>Double</button>
      <button onClick={() => dispatch({ type: "half" })}>Half</button>
    </>
  );
}
