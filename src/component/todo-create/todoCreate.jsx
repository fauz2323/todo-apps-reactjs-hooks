import React, { useState } from "react";

const TodoForm = (props) => {
    const [getText, setText] = useState('');

    const handlerSubmit = (event) => {
        event.preventDefault();

        const newTodo = {
            id: Math.floor(Math.random() * 100) + 1,
            tittle: getText
        }

        props.onCreateTodo(newTodo);
        setText('');
    }

    const handlerInput = (event) => {
        setText(event.target.value);
    }

    return (
        <form onSubmit={handlerSubmit} className="mt-5 mt-5">
            <div className="mb-3">
                <input type="text" value={getText} className="form-control" onChange={handlerInput} />
                <button type="submit" name="tittle" className="btn btn-primary mt-3">Add Todo</button>
            </div>
        </form>
    );
}

export default TodoForm;