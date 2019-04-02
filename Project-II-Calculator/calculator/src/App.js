import React from 'react';
import './App.css';
import NumberButton from "./components/ButtonComponents/NumberButton"
import ActionButton from "./components/ButtonComponents/ActionButton"
import CalculatorDisplay from "./components/DisplayComponents/CalculatorDisplay"

const App = () => {
  return (
    <div>
      <div>
        <CalculatorDisplay text="0"/>
      </div>
      <div>
        <NumberButton text="CLEAR" buttonStyle="brock"/>
      </div>
        <div className="numbers">
          <NumberButton text="1" buttonStyle="sean"/>
          <NumberButton text="2" buttonStyle="sean"/>
          <NumberButton text="3" buttonStyle="sean"/>
          <NumberButton text="4" buttonStyle="sean"/>
          <NumberButton text="5" buttonStyle="sean"/>
          <NumberButton text="6" buttonStyle="sean"/>
          <NumberButton text="7" buttonStyle="sean"/>
          <NumberButton text="8" buttonStyle="sean"/>
          <NumberButton text="9" buttonStyle="sean"/>
        </div>
      <div>
        <NumberButton text="O" buttonStyle="brock"/>
    </div>
      <div>
        <ActionButton text="/" buttonStyle="scarlet"/>
        <ActionButton text="*" buttonStyle="scarlet"/>
        <ActionButton text="+" buttonStyle="scarlet"/>
        <ActionButton text="-" buttonStyle="scarlet"/>
        <ActionButton text="=" buttonStyle="scarlet"/>
      </div>
  </div>
  );
};

export default App;

