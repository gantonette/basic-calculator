import { useState } from 'react';



function App() {
  const [calc, setCalc] = useState("");
  const [result, setResult] = useState("");
  const [total, setTotal] = useState("");

  const ops = ["+", "-", "*", "/", "."];



  // state (BMI)
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState('');
  const [message, setMessage] = useState('');
  
  // show image based on bmi calculation
  let imgSrc = '';

  if (bmi < 1) {
    imgSrc = null;
  } else {
    if (bmi < 25) {
      imgSrc = null;
    } else if (bmi >= 25 && bmi <30) {
      imgSrc = null;
    }
  }

  let calcBmi = (event) => {
    event.preventDefault();

    if (weight === 0 || height === 0) {
      setMessage('Please enter your weight and height');
      
    } else {
      let bmi = (weight / (height * height));
      setBmi(bmi.toFixed(2));

      // Logic for message
      if (bmi < 25) {
        setMessage('You are underweight');
      } else if (bmi >= 25 && bmi < 30) {
        setMessage('You are at a healthy weight');
      } else {
        setMessage('You are overweight');
      }
    }
  }

  let reload = () => {
    window.location.reload();
  }






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


      {/* bmi-calculator */}
      <div className="bmi-container">
        <h2 className='bmiCalcCenter'>BMI Calculator</h2>
        <form onSubmit={calcBmi}>
          <div>
            <label>
              Weight (kgs)</label>
            <input value={weight} onChange={(event) => setWeight(event.target.value)} />
          </div>
          <div>
            <label>
              Height (meters)</label>
            <input value={height} onChange={(event) => setHeight(event.target.value)} />
          </div>
          <div>
            <button className='btn' type='submit'>Submit</button>
            <button className='btn btn-outline' onClick={reload} type='submit'>Reload</button>
          </div>
        </form>

        <div className='center'>
          <h3>Your BMI is: {bmi}</h3>
          <p>{message}</p>
        </div>

        <div className='img-container'>
          <img src={imgSrc} alt=''></img>
        </div>
      </div>

    
      {/* basic calculator */}  
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
