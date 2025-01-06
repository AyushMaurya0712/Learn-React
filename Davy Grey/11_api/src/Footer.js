const Footer = ({length}) => {
    return (
        <>
            <p className = "footer">{length} , list {length === 1 ? "item" : "items"}</p>        
        </>
    ) ; 
}

export default Footer ; 