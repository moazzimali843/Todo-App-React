import React from "react";
import Title from './components/Title';
import Todoitem from "./components/Todoitem";
import Button from "./components/Button";
import './style.css';

const App = () => {
  return (
    <div className="todo-container">
      <div>
        <Title />
      </div>
      <div>
        <Todoitem text="Fajr"/>
        <Todoitem text="Zuhr"/>
        <Todoitem text="Asr"/>
        <Todoitem text="Magrib"/>
        <Todoitem text="Esha"/>
      </div>
      <div>
        <Button />
      </div>
    </div>
  );
}

export default App;