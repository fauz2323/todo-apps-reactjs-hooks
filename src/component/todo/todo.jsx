import React, { useState } from "react";
import TodoForm from "../todo-create/todoCreate";
import TodoList from "../todo-list/todoList";

const Todo = () => {
    const [getTodos, setTodos] = useState([
        {
            'id': 1,
            'tittle': 'First one'
        },
        {
            'id': 2,
            'tittle': 'First two'
        },
        {
            'id': 3,
            'tittle': 'First three'
        },
    ]);

    const eventCreateTodo = (todo) => {
        setTodos(getTodos.concat(todo));
    }

    return (
        <div>
            <h3>Todo List</h3>
            <TodoList data={getTodos} />
            <TodoForm onCreateTodo={eventCreateTodo} />
        </div>
    );
}

export default Todo;