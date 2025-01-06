
const Header2 = ({selected , handleClick}) => {    

    return (
        <div className = "grid grid-cols-3 w-full cursor-pointer bg-gray-200 ">
            <div 
            onClick = {() => handleClick(0)}
            className = {`text-center p-3 ${selected === 0 ? 'bg-black text-white' : ''}` }
            >
                <h2>Users</h2>
            </div>
            <div 
            onClick = {() => handleClick(1)}
            className = {`text-center p-3 ${selected === 1 ? 'bg-black text-white' : ''}` }
            >
                <h2>Posts</h2>
            </div>
            <div 
            onClick = {() => handleClick(2)}
            className = {`text-center p-3 ${selected === 2 ? 'bg-black text-white' : ''}` }
            >
                <h2>Comments</h2>
            </div>
        </div>
    ) ; 
}

export default Header2 ; 