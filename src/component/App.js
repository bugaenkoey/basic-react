import React,{useState} from 'react';
import logo from '../logo.svg';
import '../App.css';
import Button from './Button';
import Products from './ProductList';
// import MyApp from './MyApp';
// import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(5);
  // console.log("My");
  console.log(counter);

  function increment(){
    setCounter(counter*2);
    // var animation = document.getElementById("App-logo");// ="App-logo-spin infinite 5s linear"; 
    // animation.style.animation ="App-logo-spin infinite 1s linear"; 
  }
  function decrement(){
    setCounter(counter/2);
    
  }
  // var counterStr =counter.toString()+"s"; //"5s";
  return (
    <div className="App">
      <header className="App-header">
        <Button action={increment} text={"+"}/>
        {counter}
        <Button action={decrement} text={"-"}/>

        {/* <button onClick={increment}>+</button>
        {counter}
        <button onClick={decrement}>-</button> */}
        
        <img src={logo} className="App-logo" alt="logo" style={{animationDuration:  counter.toString()+"s" , /*backgroundColor: "aquamarine",*/ animationIterationCount: " infinite"}} />
        {/* <p>
          Edit <code>src/App.js</code> and save to reload.
        </p> */}
        {/* <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a> */}
 <Products/>
        {/* <MyApp/> */}
      </header>
    </div>
  );
}

export default App;
