import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  const [counter, setCounter]  = useState(15)
  //let counter = 15;
  let Addcount = () => {
    //counter = counter + 1; 
    if(counter < 20){
      setCounter(counter + 1);
      console.log(counter);
    }
    
  }
  let Removecount = () => {
    //counter = counter - 1;
    if(counter >= 1){
      setCounter(counter - 1);
      console.log(counter);
    }

  }

  return (
    <>
      <h1>Chai aur react</h1>
      <h2>Counter value: {counter}</h2>

      <button id="but1" onClick = {Addcount}>Add value: {counter}</button>
      <br />
      <button id="but2" onClick = {Removecount}>Remove value : {counter}</button>
      <footer>footer: {counter}</footer>
    </>
  )
}

export default App
