function Header({ title }){  // we could write => props and than props.title 
    return (
        <>
            <h1> {title} </h1>
        </>
    ) ; 
}

Header.defaultProps = {
    title : "Random List" ,
}   

export default Header ; 