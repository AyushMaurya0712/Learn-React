import Header from "./Header.js" ; 
import Content from "./Content.js" ; 
import "./index.css";
import {useState , useEffect} from "react" ; 
import Footer from "./Footer.js" ; 
import AddItem from "./addItem.js";
import SearchItem from "./SearchItem.js";
import apiRequest from "./apiRequest.js";

function App() {
  // const getUserName =  () => {
  //   let name = ["aman" , "ratan" , "rohan" , "ritesh"]; 
  //   let ranInd = Math.floor(Math.random() * 4) ;
  //   return name[ranInd] ; 
  // }

  const apiurl = "http://localhost:3500/items" ; 
  const [items , setItem] = useState([]) ; 

  const [newItem , setNewItem] = useState('') ;   // it is a string 

  const [searchItem , setSearchItem] = useState('') ; 
  const [fetchError , setFetchError] = useState('') ; 
  const [isLoading , setIsLoading] = useState(true) ; 

  const saveAndUpdate = (listItems) => {
     
  }

  useEffect(() => {
    const fetchItems = async () => {
      try{
        const response = await fetch(apiurl) ; 
        if(!response.ok) throw ("Did not recieve the data from the server.")
        const listItems = await response.json() ; 
        console.log(listItems) ; 
        setItem(listItems) ; 
        setFetchError(null) ; 
      }
      catch(err){
        // console.log(err)
        setFetchError(err) ; 
      }
      finally {
        setIsLoading(false) ; 
      }
    }

    setTimeout(() => {
      fetchItems() ; 
    } , 2000)
  } , [])


  const addItem = async (item) =>{ 
    let id = items.length == 0 ? "0" : String(parseInt(items[items.length -1].id) + 1) ; 
    // console.log(id) ; 
    let myNewItem = {id , checked : false , item} ; 
    const ListItems = [...items , myNewItem] ;
    setItem(ListItems) ;  

    const postOptions = {
      method : 'POST' , 
      header : {
        'Content-Type' : 'application/json',
      },
      body : JSON.stringify(myNewItem) 
    }
    const result = await apiRequest(apiurl , postOptions) ;
    if(result) setFetchError(result) ; 
  }

  const handleClick = async(id) => {
    const ListItems = items.map((item) => item.id === id ? {...item , checked 
      : !item.checked} : item) ; 
      setItem(ListItems) ;   
        
    const myItem = items.filter((item) => item.id == id) ; 
    const updateOptions = {
      method : "PATCH" , 
      headers : {
        'Content-Type' :  'applications/json', 
      },
      body : JSON.stringify({checked : !myItem[0].checked})
    }
    const reqURL = `${apiurl}/${id}` ; 
    const result = await apiRequest(reqURL , updateOptions) ; 
    if(result) setFetchError(result) ; 
  }

  const handleDelete = async(id) =>{
      const ListItems = items.filter((item) => item.id !== id) ; 
      setItem(ListItems) ;  

      const deleteOptions = {method : 'DELETE'} ; 
      const requrl = `${apiurl}/${id}` ; 
      const result = await apiRequest(requrl , deleteOptions) ; 
      if(result) setFetchError(result) ; 
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
      <main>
        {isLoading && <p style = {{textAlign : "center"}}> Loading Items .... </p>}
        {fetchError && <p style = {{color : "red"}}>{`Error : ${fetchError}`}</p>}
        {!fetchError && !isLoading && <Content 
            items={items.filter(item => item.item.toLowerCase().includes(searchItem.toLowerCase()))} 
            handleClick = {handleClick} 
            handleDelete = {handleDelete}
          />         
        }
      </main>
      <Footer length = {items.length} /> 
    </>
  );
}

export default App;
