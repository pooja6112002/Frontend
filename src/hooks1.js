import Header from "./Header";
import Footer from "./Footer";
import "./Mystyle.css";
import { useState } from "react";

function App() {

  const [num1, setNum1] = useState("");
  const [num2, setNum2] = useState("");
  const [num3, setNum3] = useState("");

  const [sumResult, setSumResult] = useState("");
  const [subResult, setSubResult] = useState("");
  const [mulResult, setMulResult] = useState("");
  const [divResult, setDivResult] = useState("");
  const [armResult, setArmResult] = useState("");

  function sum() {
    setSumResult(Number(num1) + Number(num2));
  }

  function sub() {
    setSubResult(Number(num1) - Number(num2));
  }

  function mul() {
    setMulResult(Number(num1) * Number(num2));
  }

  function div() {
    setDivResult(Number(num1) / Number(num2));
  }

  function Armstrong() {
  if(num3===""){
    setArmResult("Please enter the number");
    return;
  }
    let num = parseInt(num3);
    let temp = num;
    let armSum = 0;

    while (temp !== 0) {
      let r = temp % 10;
      armSum += r * r * r;
      temp = Math.floor(temp / 10);
    }

    if (armSum === num) {
      setArmResult("Armstrong Number ");
    } else {
      setArmResult("Not an Armstrong Number ");
    }
  }

  return (
    <div className="App">
      <Header />

      <main className="main">
        <h1>Calculation Table</h1>

        <input
          type="number"
          placeholder="Enter 1st Number"
          onChange={(e) => setNum1(e.target.value)}
        />

        <input
          type="number"
          placeholder="Enter 2nd Number"
          onChange={(e) => setNum2(e.target.value)}
        />

        <table className="calculation">
          <tr>
            <th>Operation</th>
            <th>Action</th>
            <th>Result</th>
          </tr>

          <tr>
            <td>Addition</td>
            <td><button onClick={sum}>Sum</button></td>
            <td>{sumResult}</td>
          </tr>

          <tr>
            <td>Subtraction</td>
            <td><button onClick={sub}>Subtract</button></td>
            <td>{subResult}</td>
          </tr>

          <tr>
            <td>Multiplication</td>
            <td><button onClick={mul}>Multiply</button></td>
            <td>{mulResult}</td>
          </tr>

          <tr>
            <td>Division</td>
            <td><button onClick={div}>Divide</button></td>
            <td>{divResult}</td>
          </tr>
        </table>
      

      <h3>Check Armstrong Number</h3>
      <input
        type="number"
        placeholder="Enter Number"
        value={num3}
        onChange={(e) => setNum3(e.target.value)}
      />
      <button onClick={Armstrong}>Check Armstrong</button>

      <h1>{armResult}</h1>
      </main>

      <Footer />
    </div>
  );
}

export default App;

