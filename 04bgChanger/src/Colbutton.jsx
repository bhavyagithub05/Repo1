import React, { useState } from 'react'

function Colbutton({colorprop, setcolor, textcol}){
    const displayProp = colorprop.charAt(0).toUpperCase() + colorprop.slice(1);
    return(
        <button  onClick={() => setcolor(colorprop)} className="outline-none px-4 py-1 rounded-full"  style={{backgroundColor: colorprop, color: textcol}}>{displayProp}</button>
    )    
}

export default Colbutton; 