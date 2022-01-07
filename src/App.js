import React, { useState, useEffect, useCallback } from "react";

import {TodoList, Input} from './components/index';

const App = () => {
    const [todo, setTodo] = useState([]);


    console.log('rendered')


    return (
        <>
            <Input setTodo={setTodo}/>
            <TodoList todo={todo} />
        </>
    )
}

export default App;
