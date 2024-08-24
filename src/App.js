import React,{useState} from 'react';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';
import * as math from "mathjs" ;
import { evaluate } from 'mathjs';

const App=() =>{
  const [text , setText] = useState("");
  const [result ,setResult] = useState("");

  const calculateResult = () =>{
    const input = text.join("");
    setResult(math.evaluate(input));
  };


//   function calculateResult(text) {
//     let textArray;
//     if (typeof text === 'string') {
//         textArray = text.split(''); // Split string into an array of characters
//     } else if (Array.isArray(text)) {
//         textArray = text;
//     } else {
//         throw new TypeError('Expected a string or an array');
//     }
//     let result = textArray.join(',');
//     return result;
// }

  const addToText = (val)=>{
    setText((text)=>[...text, val + " "])
  };

  const resetInput = ()=>{
    setText("");
    setResult("");
  };

 

  return (
    <div className="App">
      <div className="calc-wrapper">
        <Input text={text} result={result}/>
        <div className='row'>
          <Button symbol="7" handleClick={addToText}/>
          <Button symbol="8" handleClick={addToText}/>
          <Button  symbol="9" handleClick={addToText}/>    
          <Button symbol="/" color="#f2a33c" handleClick={addToText}/>    
        </div>
        <div className='row'>
          <Button symbol="4" handleClick={addToText}/>
          <Button symbol="5" handleClick={addToText}/>
          <Button symbol="6" handleClick={addToText}/>    
          <Button symbol="*" color="#f2a33c" handleClick={addToText}/>    
        </div>
        <div className='row'>
          <Button symbol="1" handleClick={addToText}/>
          <Button symbol="2" handleClick={addToText}/>
          <Button symbol="3" handleClick={addToText}/>    
          <Button symbol="+" color="#f2a33c" handleClick={addToText}/>    
        </div>
        <div className='row'>
          <Button symbol="0" handleClick={addToText}/>
          <Button symbol="." handleClick={addToText}/>
          <Button symbol="=" handleClick={calculateResult}/>    
          <Button symbol="-" color="#f2a33c" handleClick={addToText}/>    
        </div>
        <div className='row'>
          <Button symbol="Clear" color="red" handleClick={resetInput}/>
        </div>
      </div>
    </div>
  );
}

export default App;
