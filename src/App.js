import React, { useState, useEffect, useCallback } from "react";

import {TodoList, Input} from './components/index';

const App = () => {
    const [todo, setTodo] = useState([]);


    console.log('rendered')


    return (
        <div className="app">
            <Input setTodo={setTodo}/>
            <TodoList todo={todo} />
        </div>
    )
}

export default App;
