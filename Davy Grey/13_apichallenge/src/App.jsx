import Header from "./Header.jsx"
import {useState} from "react" ; 
import Header2 from "./Header2.jsx" 
import ApiRequest from "./ApiRequest.jsx";
import List from "./List.jsx"

function App() {
  const [selected , setSelected] = useState(null) ;
  const [listItems , setListItems] = useState([]) ;
  const [error , setError] = useState(null) ;
  const apiurl = ["https://jsonplaceholder.typicode.com/users",
     "https://jsonplaceholder.typicode.com/posts" , "https://jsonplaceholder.typicode.com/comments"] ;
  
  
  const handleClick = (index) => {
    if(selected === index) return ; 
    setSelected(index) ;  

    const result = ApiRequest(apiurl[index])
    if(result && typeof(result) === "object"){ console.log(result) ; 
      setListItems(result) ; 
    }   
    else if(result){
      console.log(result) ; 
    }
    else{
      console.log("Nothing was returned") ; 
    }
  }
  
  return (
    <>
      <Header2 
       selected = {selected} 
       handleClick = {handleClick}  
      />
      <List 
        listItems = {listItems} 
      />
    </>
  )
}

export default App
