
import { create, all } from 'mathjs'
import { useState } from 'react';
import './App.css';

const config = {}
const math = create(all, config)

function App() {
  const [count, setCount] = useState("");
  // const [currentButton, setCurrentButton] = useState('')
  // const [total, setTotal] = useState('')

  // console.log(math.evaluate('12 / (2.3 + 0.7)')) // 4
  // console.log(math.evaluate('12 / 2 * 3')) // 18
  // console.log(math.evaluate('1 + 2 * 3')) // 7
  // console.log(math.evaluate('(1 + 2) * 3')) // 9

  // const handleClick = (e: any): void => {
  //   setCount(count + e.target.value)
  //   setCurrentButton(e.target.value);
  //   setTotal(e.target.value)

  //   if (
  //     count.charAt(count.length-1) !== '+' && 
  //     count.charAt(count.length-1) !== '-' &&
  //     count.charAt(count.length-1) !== '*' &&
  //     count.charAt(count.length-1) !== '/'
  //   ) {
  //     console.log("evaluate works on click", math.evaluate(count))
  //     setTotal(math.evaluate(count))
  //   }
  // }

  const handleClick = (e: any): void => {
    setCount(count + e.target.value)
  }

  const test = () => {
    console.log('test', count)
    console.log('test', math.evaluate(count))
    setCount(math.evaluate(count))
  }

  return (
    <div className="Container">
    <div className="Calculator">
      <input
        type="text"
        value={count}
        onChange={e => setCount(e.target.value)}
      />
      {/* <input
        type="text"
        value={currentButton}
        onChange={e => setCurrentButton(e.target.value)}
      /> */}
      {/* <input
        type="text"
        value={total}
        onChange={e => setTotal(e.target.value)}
      /> */}
      <button>CL</button>
      <button>DEL</button>
      <button value="%" onClick={handleClick}>%</button>
      <button value="/" onClick={handleClick}>/</button>
      <button value="7" onClick={handleClick}>7</button>
      <button value="8" onClick={handleClick}>8</button>
      <button value="9" onClick={handleClick}>9</button>
      <button value="*" onClick={handleClick}>*</button>
      <button value="4" onClick={handleClick}>4</button>
      <button value="5" onClick={handleClick}>5</button>
      <button value="6" onClick={handleClick}>6</button>
      <button value="-" onClick={handleClick}>-</button>
      <button value="1" onClick={handleClick}>1</button>
      <button value="2" onClick={handleClick}>2</button>
      <button value="3" onClick={handleClick}>3</button>
      <button value="+" onClick={handleClick}>+</button>
      <button value="0" onClick={handleClick}>0</button>
      <button value="," onClick={handleClick}>,</button>
      <button className="Equal" value="=" onClick={test}>=</button>
    </div>
  </div>
  );
}

export default App;
