import React, { useState } from "react";
import { StudentView } from "./StudentView";
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
                <form className="bg-indigo-700 p-3.5 px-20 w-fit mx-auto rounded-lg flex flex-col" onSubmit={AddTodo}>
                    <div className="flex">
                        <input type="text" id="first_name" class="bg-gray-50 border border-gray-300  text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Enter Student Name" value={input} onChange={(e) => setInput(e.target.value)} />
                        <button type="submit" className="bg-indigo-500 rounded-lg p-1.5 px-5 mx-2.5 text-white">Add</button>
                    </div>
                    {/* <div><StudentView todo={todo} /></div> */}
                </form>
            </div>
        </>
    )
}