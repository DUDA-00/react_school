import React, {FC} from "react";
import {ITodo} from "../models/ITodo";


type TodoProps =  {
    todos: ITodo[]
}
const Todos: FC<TodoProps> = ({todos}) => {


    return(

    <div>
        {
            todos.map(item => (<div>{item.todo}</div>))
        }

    </div>

    )
}

export default Todos;


