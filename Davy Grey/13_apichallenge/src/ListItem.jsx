const ListItem = ({key , item}) => {
    console.log("hello " , item) ;
    return (
        <li>
            {JSON.stringify(item)} 
        </li>
    ) ; 
}

export default ListItem ; 