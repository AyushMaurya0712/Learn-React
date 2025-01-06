const ApiRequest = async (url) => {
    let error = null; 
    // console.log(url) ; 
    try{
        const response = await fetch(url) ; 
        if(!response.ok) throw Error (null) ;
        else{
            let data = await response.json() ;
            console.log("data " , data) ; 
            return data ; 
        } ;  
    }
    catch(err){ 
        error = err.message;    
        console.log("Error : 404")
    }

    return error ? error : null ; 
}

export default ApiRequest ; 