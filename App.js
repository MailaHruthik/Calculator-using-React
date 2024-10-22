import './App.css'
import React, {useState} from "react";
import { Keypad } from "./calculate";

export function App(){
  let [num, updateNum] = useState("")

  function Handle(value){
    updateNum(num+value)
  }

  function Evaluate(){
    let result = eval(num);
    updateNum(result);
  }

  function Erase(){
    updateNum("")
  }
  
return(

  
  <>
<input type="text" value={num} readOnly id='input'></input>
<Keypad Handle = {Handle} Evaluate = {Evaluate} Erase = {Erase} ></Keypad>
</>
)
}