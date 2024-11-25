import { useRef, useState } from "react";
import "./styles.css";

function App() {
  const inputRef = useRef(null);
  const [result, setResult] = useState(0);

  function getInputValue() {
    const value = inputRef.current.value;
    if (value === "" || isNaN(value)) return null;
    return Number(value);
  }

  function handleOperation(e, operation) {
    e.preventDefault();
    const inputValue = getInputValue();
    if (inputValue === null) return alert("Please enter a valid number");

    let newResult = result;

    switch (operation) {
      case "+":
        newResult += inputValue;
        break;
      case "-":
        newResult -= inputValue;
        break;
      case "*":
        newResult *= inputValue;
        break;
      case "/":
        if (inputValue === 0) return alert("Error: division by zero");
        newResult /= inputValue;
        break;
      default:
        return;
    }

    setResult(newResult);
    inputRef.current.value = "";
  }

  function resetInput(e) {
    e.preventDefault();
    inputRef.current.value = "";
  }

  function resetResult(e) {
    e.preventDefault();
    setResult(0);
    inputRef.current.value = "";
  }

  return (
    <div className="App">
      <div>
        <h1 className="h1">Simple Calculator</h1>
      </div>
      <div>
        <p className="result">
          Result: <strong>{result}</strong>
        </p>
      </div>
      <form className="calculator">
        <input ref={inputRef} type="number" placeholder="Type a number" />
        <div className="button">
          <button onClick={(e) => handleOperation(e, "+")}>Add</button>
          <button onClick={(e) => handleOperation(e, "-")}>Minus</button>
          <button onClick={(e) => handleOperation(e, "*")}>Times</button>
          <button onClick={(e) => handleOperation(e, "/")}>Divide</button>
          <button onClick={resetInput}>DEL</button>
          <button onClick={resetResult}>Reset</button>
        </div>
      </form>
    </div>
  );
}

export default App;
