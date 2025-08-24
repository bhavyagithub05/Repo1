import { useState } from "react"
import Colbutton from "./Colbutton.jsx"

function App() {
  const [color,setcolor] = useState("white")

  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor: color}}>
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-8 shadow-lg bg-white px-3 py-2 rounded-3xl">
          <Colbutton colorprop = "red" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "blue" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "green" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "yellow" setcolor = {setcolor} textcol = "black"></Colbutton>
          <Colbutton colorprop = "violet" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "purple" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "brown" setcolor = {setcolor} textcol = "white"></Colbutton>
          <Colbutton colorprop = "pink" setcolor = {setcolor} textcol = "black"></Colbutton>

          <div>
            <button onClick={() => setcolor("white")} className="outline-none px-4 py-1 rounded-full text-white" style={{background: "linear-gradient(90deg,red,blue)"}}>Reset</button>
          </div>
          
        </div>
      </div>
    </div>
    
    </>
    
  )
}

export default App
