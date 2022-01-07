import React, { useRef } from "react"

const Input = (props) => {
    const ref = useRef(null)

    const handleClick = (e) => {
        const value = ref.current.value;
        props.setTodo(prevTodo => {
            return [...prevTodo, value]
        })
    }
    
    return (
        <form>
            <input type="text" ref={ref}></input>
            <input  type="button" value="add" onClick={handleClick}></input>
        </form>
    )

}

export default Input;
