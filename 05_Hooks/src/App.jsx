import {useState} from "react" 

function App() {
  // let counter = 3 ; 
  let [counter , setCounter] = useState(3)

  const addValue = () => {
    // console.log("value added " , Date.now()) ; 
    // console.log(counter) ; 
    if(counter < 20){
      counter++ ; 
      setCounter(counter) ; 
    }
  }

  const subValue = () => {
    if(counter > 0){
      counter-- ; 
      setCounter(counter) ;
    } 
  }

  return (
    <>
      <h1> Hello User </h1>
      <h3> Count is {counter} </h3>

      <button onClick={addValue}> Add a unit {counter} </button>
      <br/>
      <button onClick={subValue}> Subtract a unit {counter}</button>
    </>
  )
}

export default App
