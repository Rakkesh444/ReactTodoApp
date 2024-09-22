import React, { useState } from "react";
import { TodoForm } from "./todoForm";
import { v4 as uuidv4 } from "uuid";
import { Todo } from "./Todo";
import { EditTodo } from "./EditTodo";
import "./Css/StudentView.css";
uuidv4()
export const StudentView = () => {
    const [todos, setTodos] = useState([]);
    const addTodo = todo => {
        setTodos([...todos, { id: uuidv4(), task: todo, completed: false, isEditing: false }]);
        console.log(todos);
    }
    const taskCompleted = id => {
        setTodos(todos.map((todo) => todo.id === id ? { ...todo, completed: !todo.completed } : todo))
    }
    const Deleted = id => {
        setTodos(todos.filter(todo => todo.id !== id))
    }
    const editTodo = id => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, isEditing: !todo.isEditing } : todo))
    }
    const editTask = (task, id) => {
        setTodos(todos.map(todo => todo.id === id ? { ...todo, task, isEditing: !todo.isEditing } : todo))
    }
    return (
        <>
            <div className="bg-indigo-700 sm:px-2.5 sm:w-fit m-auto rounded-lg flex flex-col App__Display__Container px-6">
                <TodoForm addTodo={addTodo} />

                {todos.map((todo, index) => (
                    // <div className="bg-indigo-500 rounded p-5 mb-4">
                    todo.isEditing ? (
                        < EditTodo editTodo={editTask} task={todo} />
                    ) : (
                        <Todo task={todo} key={index} taskCompleted={taskCompleted} Deleted={Deleted} editTodo={editTodo} />
                    )
                    // </div>
                ))}
                {/* <Todo task={todo} key={index} /> */}
            </div >
        </>
    )
}