import React from "react";

const TodoList = (props) => {
    return (
        <section className="todo-box">
            <ul className="todo-list">
                {props.todo.map((value, key) => {
                    return <li className="todo-item" key={key}>{value}</li>
                })}
            </ul>
        </section>
    )
}

export default TodoList;
