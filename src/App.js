import { useState } from 'react';


function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");

  const ops = ["+", "-", "*", "/", "."];

  const updateCalc = value => {
    if (
      ops.includes(value) && calc === '' ||
      ops.includes(value) && ops.includes(calc.slice(-1)
      )
    ) {
      return;
    }

    setCalc(calc + value);

    if (!ops.includes(value)) {
      setResult(eval(calc + value).toString());
    }
  }


  const createDigits = () => {
    const digits = [];

    for (let i = 1; i < 10; i++) {
      digits.push(
        <button
          onClick={() => updateCalc(i.toString())}
          key={i}>
          {i}
        </button>
      )
    }

    return digits;
  }

  const calculate = () => {
    setCalc(eval(calc).toString());
  }

  const deleteLast = () => {
    if(calc == '') {
      return;
    }

    const value = calc.slice(0, -1);

    setCalc(value);
  }


  
  // basic addition function
  const basicCalc = () => {
    var firstNumber = document.getElementById("firstNumber").value;
    var secondNumber = document.getElementById("secondNumber").value;
    var total = parseInt(firstNumber) + parseInt(secondNumber);
    setTotal(total.toString());
    
  }

  return (
    <div className="App">
      <div className="calculator"> 
        <div className="display">
          { result ? <span> ({result}) </span> : '' }
          { calc || "0" } 
        </div>

        <div className="operators">
          <button onClick={() => updateCalc('/')}>/</button>
          <button onClick={() => updateCalc('*')}>*</button>
          <button onClick={() => updateCalc('+')}>+</button>
          <button onClick={() => updateCalc('-')}>-</button>

          <button onClick={deleteLast}>DEL</button>
        </div>
        
        <div className="digits">
          { createDigits() }
          <button onClick={() => updateCalc('0')}>0</button>
          <button onClick={() => updateCalc('.')}>.</button>
          <button onClick={calculate}>=</button>
        </div>
      </div>



      {/* Addition Basic Calculator (trying to learn basic React Hooks) */}
      <div className="basicCalc">
            <div className="display">
                <h1>Addition of two numbers</h1>
                <span>Enter First Number: </span>
                <input type="text" id="firstNumber"></input>
                <br/>
                <span>Enter Second Number: </span>
                <input type="text" id="secondNumber"></input>
                <br/>
                { total || "0" } 
                <br/>
                <button onClick={basicCalc}>Calculate</button>
            </div>
        </div>
    </div>
  );
}

export default App;
