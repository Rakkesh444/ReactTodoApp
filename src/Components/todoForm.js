import React, { useState } from "react";
import { StudentView } from "./StudentView";
import "./Css/Form.css";
export const TodoForm = ({ addTodo }) => {
    const [input, setInput] = useState('');
    // const [todo, setTodo] = useState([]);
    const AddTodo = (e) => {
        e.preventDefault();
        // setTodo((previousValue) => [...previousValue, input]);
        addTodo(input)
        setInput("");
    }
    return (
        <>
            <div className="todo">
                <form className="bg-indigo-700 p-2 py-3 px-3 sm:p-3.5 sm:px-20 mx-auto rounded-lg Form__Container" onSubmit={AddTodo}>
                    <div className="Todo__Add__Form flex">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Student Name" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" className="bg-indigo-500 rounded-lg p-1.5 sm:px-5 px-16 mx-2.5 text-white Form__Submit__Btn">Add</button>
                    </div>
                    {/* <div><StudentView todo={todo} /></div> */}
                </form>
            </div>
        </>
    )
}