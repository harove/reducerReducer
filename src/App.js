import "./styles.css";
import { useReducer } from "react";

export default function App() {
  const nums = [2, 4, 6];
  let state = 0;

  function sum(num) {
    state = state + num;
  }

  nums.forEach(sum);

  console.log("state", state);
  sum(8);
  console.log(" state for sum evaluated in 8", state);

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
    </div>
  );
}
