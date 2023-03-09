//import logo from './logo.svg';
import './App.css';
import React, { useState } from 'react'
import ColorBlock from './ColorBlock'
import ColorForm from './ColorForm'

function App() {
  let [colors, setColors] = useState (['violet','red', 'blue', 'lightblue', 'greenyellow', 'yellow', 'green', 'orange']) 
  let colorMap = colors.map((color, i) => {
    return (
      <ColorBlock key={i} color={color} />
    )
  })

  //jsx section
  const addColor = (newColor) => {
    setColors([colors, newColor])
  }
  return (
    <div className="App">
      {colorMap}
      <ColorForm addColor={addColor} /> 
    </div>
  )
}

export default App;
