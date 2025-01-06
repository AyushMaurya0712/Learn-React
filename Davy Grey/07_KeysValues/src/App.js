import Header from "./Header.js" ; 
import Content from "./Content.js" ; 
import "./index.css";
import {useState , useEffect} from "react" ; 
import Footer from "./Footer.js" ; 
import AddItem from "./addItem.js";
import SearchItem from "./SearchItem.js";

function App() {
  // const getUserName =  () => {
  //   let name = ["aman" , "ratan" , "rohan" , "ritesh"]; 
  //   let ranInd = Math.floor(Math.random() * 4) ;
  //   return name[ranInd] ; 
  // }

  const [items , setItem] = useState(JSON.parse(localStorage.getItem("fruitList")) || []) ; 

  const [newItem , setNewItem] = useState('') ;   // it is a string 

  const [searchItem , setSearchItem] = useState('') ; 

  const saveAndUpdate = (listItems) => {
     
  }

  useEffect(() => {
    localStorage.setItem("fruitList" , JSON.stringify(items)) ;
  } , [items])


  const addItem = (item) =>{ 
    let id = items.length == 0 ? 0 : (items[items.length -1].id + 1) ; 
    // console.log(id) ; 
    let myNewItem = {id , checked : false , item} ; 
    const ListItems = [...items , myNewItem] ;
    setItem(ListItems) ;  
  }

  const handleClick = (id) => {
    const ListItems = items.map((item) => item.id === id ? {...item , checked 
        : !item.checked} : item) ; 
        setItem(ListItems) ;       
  }

  const handleDelete = (id) =>{
      const ListItems = items.filter((item) => item.id !== id) ; 
      setItem(ListItems) ;  
  }

  const handleSubmit = (e) => {
    e.preventDefault() ; 
    // console.log(e.target) ;
    if(!newItem) return ; 
    addItem(newItem) ;
    setNewItem("") ; 
  }


  return (
    <>
      <Header title = "Grocery List" /> 
      <AddItem 
        newItem = {newItem}
        setNewItem = {setNewItem}
        handleSubmit = {handleSubmit} 
      />
      <SearchItem
        searchItem = {searchItem}
        setSearchItem = {setSearchItem}
      />
      <Content 
        items={items.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))} 
        handleClick = {handleClick} 
        handleDelete = {handleDelete}
      /> 
      <Footer length = {items.length} /> 
    </>
  );
}

export default App;
