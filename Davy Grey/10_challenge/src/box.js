import colorNames from "colornames" ; 

const Box = ({
    colorName , setColorName , hexValue , setHexValue , isDark ,setToggleColor
}) => {
    return (
        <>
            <div className = "displayColor" placeholder = "Color Name" 
                style = {{
                    backgroundColor : colorName , 
                    color : isDark ? "white" : "black"
                }} 
            >
                <p>{colorName ? colorName : "Color Name"} </p>
                <p>{hexValue ? hexValue : null} </p>
            </div>
            <input
                type = "text"
                id = "color"
                placeholder="Add color name" 
                style = {{color :colorName == "white" ? "black" : colorName}}  
                value = {colorName}
                onChange={(e) => {
                    setColorName(e.target.value) ; 
                    // console.log(colorNames(e.target.value)) ; 
                    setHexValue(colorNames(e.target.value)) ; 
                }}           
            />     
            <button 
                type = "button" 
                onClick = {() => setToggleColor(!isDark)}
            >
                Toggle text color
            </button>
        </>
    ); 
}

export default Box ; 