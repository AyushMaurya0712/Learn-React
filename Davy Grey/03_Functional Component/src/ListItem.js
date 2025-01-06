import {useState} from 'react' ; 

const List = () => {
    const [name , setName] = useState("aman") ; 
    const nameArr = ["Rohan" , "Ratan" , "Rishabh" , "Ritesh" , "Raman"] ; 
    const [count , setCount] = useState(0) ; 

    const workItOut = () => {
        let index = Math.floor(Math.random() * 5) ; 
        setName(nameArr[index]) ; 
    }

    function changeName(){
        workItOut() ; 
        console.log("Button was clicked" , Date.now()) ;     
    }
    function handleClick2(name){
        // console.log(`Welcome ${name} to trakonania`) ;
        // setCount(count + 1) ; 
        // setCount(count + 3) ; 
        setCount(count + 5) ; 
        console.log(count) ;      
    }
    function handleClick3(e){
        console.log(e.target.innerHTML) ;     
    }
    
    return (
        <>
        <ol> 
            <li> Fruits  </li> 
            <li> Veges   </li> 
            <li> {count}  </li> 
            <li> {name}  </li> 
        </ol>

        <button onClick = {changeName}> Click Here</button>
        <button onClick = {() => {handleClick2("aman")}}> Click Here</button>
        <button onClick = {(e) => handleClick3(e)}> Click Here</button>

        </>
    ) ; 
}

export default List ; 