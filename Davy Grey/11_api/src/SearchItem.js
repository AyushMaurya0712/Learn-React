const SearchItem = ({SearchItem , setSearchItem}) => {
    return (
        <form className = "SearchBox" >
            <label>Search</label>
            <input
                id = "search"
                type = "text"
                placeholder="Search"
                role = "searchbox"
                value = {SearchItem} 
                onChange = {(e) => setSearchItem(e.target.value)} 
            />
        </form>
    ) ; 
}

export default SearchItem ; 