function customRender(reactElement , mainContainer){
    // let domElement = document.createElement(reactElement.type); 
    // domElement.innerHTML = reactElement.children ; 
    // domElement.setAttribute('href' , reactElement.props.href) ; 
    // domElement.setAttribute("target" , reactElement.props.target) ; 

    // mainContainer.appendChild(domElement) ; 

    let domElement = document.createElement(reactElement.type) ; 
    domElement.innerHTML = reactElement.children ;

    for (const prop in reactElement.props) {
        if (prop === 'child') continue ;
        domElement.setAttribute(prop , reactElement.props[prop]) ; 
    }
    mainContainer.appendChild(domElement) ; 
}


const reactElement = {
    type : 'p' , 
    props : {
        href : 'https://www.google.com/' , 
        target : "_blank" , 
    },
    children : "click me " , 
}

const mainContainer = document.querySelector("#root") ; 

customRender(reactElement , mainContainer) ; 
