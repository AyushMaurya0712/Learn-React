import Box from "./box.js" ;
import {useState} from "react" ; 

function App() {
  const [colorName , setColorName] = useState('') ; 
  const [hexValue , setHexValue] = useState('') ; 
  const [isDark , setToggleColor] = useState(true) ; 

  return (
    <>
      <Box
        colorName = {colorName}
        setColorName = {setColorName}
        hexValue = {hexValue}
        setHexValue = {setHexValue} 
        isDark = {isDark}
        setToggleColor = {setToggleColor} 
      />
    </>
  );
}

export default App;
