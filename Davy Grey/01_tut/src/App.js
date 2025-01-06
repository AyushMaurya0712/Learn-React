import './App.css';

function App() {
  const getUserName =  () => {
    let name = ["aman" , "ratan" , "rohan" , "ritesh"]; 
    let ranInd = Math.floor(Math.random() * 4) ;
    return name[ranInd] ; 
  }

  return (
    <div className="App">
      <header className="App-header">
        <p>
          Hello {getUserName()} ; 
        </p>
      </header>
    </div>
  );
}

export default App;
