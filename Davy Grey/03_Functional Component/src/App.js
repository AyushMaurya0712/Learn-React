// import './App.css';
import Header from "./Header.js" ; 
import List from "./ListItem.js"  ; 
import Footer  from "./Footer.js"; 


function App() {
  const getUserName =  () => {
    let name = ["aman" , "ratan" , "rohan" , "ritesh"]; 
    let ranInd = Math.floor(Math.random() * 4) ;
    return name[ranInd] ; 
  }

  return (
    <>
      <Header /> 
      <List /> 
      <Footer />  
    </>     
  );
}

export default App;
