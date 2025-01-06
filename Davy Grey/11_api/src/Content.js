import ItemList from "./ItemList.js" ;

const Content = ({items , handleClick , handleDelete}) => {
    console.log(items) ; 
    return (
        <> 
            {items.length != 0 ? (
                <ItemList 
                    items = {items} 
                    handleClick = {handleClick} 
                    handleDelete = {handleDelete}
                />
            ) : (
                <p> List contains 0 items </p>
            )}
        </>
    ) ; 
}

export default Content ; 