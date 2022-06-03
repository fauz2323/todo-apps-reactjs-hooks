import React from "react";

const TodoList = (props) => {
    console.log(props.data);
    return (
        <div>
            <ul className="list-group mt-3">
                {props.data.map((e) => {
                    return <li className="list-group-item mt-2" key={e.id}>{e.tittle}</li>
                })
                }
            </ul>
        </div>
    );
}

export default TodoList;