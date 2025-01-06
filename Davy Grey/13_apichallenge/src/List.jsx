import ListItem from "./ListItem";

const List = ({listItems}) =>{
    console.log(listItems) ; 
    return (
        <ul>
        {Array.isArray(listItems) && listItems.length > 0 ? (
            listItems.map((item) => <ListItem key={item.id} item={item} />)
        ) : (
            <li>No items to display</li> // Optional: message for empty list
        )}
    </ul>
    ) ; 
}
export default List ; 