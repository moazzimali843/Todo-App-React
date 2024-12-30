import React from "react";

const Todoitem = (props) => {
    return(
        <li className="todo-item">
            <span>
                <input type="checkbox" className="todo-checkbox"/>
                <span className="todo-item-text">{props.text}</span>
            </span>
            <span><b>...</b></span>
        </li>
    );
}

export default Todoitem;