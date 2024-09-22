import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTrash, faEdit } from "@fortawesome/free-solid-svg-icons";
export const Todo = ({ task, taskCompleted, Deleted, editTodo }) => {
    return (
        <div className="flex justify-between bg-purple-500 p-3 rounded-lg mb-2">
            <p onClick={() => taskCompleted(task.id)} className={task.completed ? "Completed" : ""}><span className="text-white">{task.task}</span></p>
            <div className="flex gap-12 relative">
                <FontAwesomeIcon icon={faEdit} onClick={() => editTodo(task.id)} className="cursor-pointer text-red-800 text-xl hover:text-white" />
                <FontAwesomeIcon icon={faTrash} onClick={() => Deleted(task.id)} className="cursor-pointer text-red-500 text-xl hover:text-red-700 transition duration-100" />
            </div>
        </div >
    )
}