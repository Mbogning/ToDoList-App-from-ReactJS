import React from 'react';
import ToDo from './ToDo';

const ToDoList = ({tasks}) => (

    <>
        <h1 className="m-3">Liste des taches</h1>
        <ul className="list-group">
            {
                tasks.map((task) => <ToDo task= {task} key={task.id} />)
            }
        </ul>
    </>
)

export default ToDoList