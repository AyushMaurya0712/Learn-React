import { FaTrashAlt } from "react-icons/fa";

const LineItem = ({key , item , handleClick , handleDelete}) => {
    return (
        <li className="item" key={item.id} style = {{listStyleType : "none"}}>
            <input 
                type="checkbox" 
                onChange={() => handleClick(item.id)} 
                checked={item.checked} 
                // onChange={() => {}} // Add an onChange handler here if you need to update checked state
            />
            <label 
                style = {item.checked ? {textDecoration : "line-through"} : null}
                onDoubleClick={() => handleClick(item.id)} 
            >{item.item}</label>
            <FaTrashAlt
                onClick={() => handleDelete(item.id)} 
                role = "button" 
                tabIndex= "0" 
            />
        </li>
    ) ; 
}

export default LineItem ; 