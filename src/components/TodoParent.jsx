import React, { useState, useRef, useEffect } from 'react';
import { BiListPlus } from 'react-icons/bi';
import Task from './Task';
import "../css/TodoParent.css";

function TodoParent() {
    const [tasks, setTasks] = useState([]);
    const taskRefs = useRef([]);
    

    const handleNewTask = () => {
        setTasks([...tasks, ""]);

        // tasks && taskRefs.current.map(item => item.contentEditable = false)
        
        setTimeout(() => {
            const lastIndex = tasks.length;
            taskRefs.current[lastIndex].contentEditable = true;
            taskRefs.current[lastIndex].focus();
        }, 0);
    };


    return (
        <div>
            <h2>My Todo App</h2>
            <div id="taskContainer">
                {tasks.length > 0
                    ? tasks.map((item, index) => (
                        <Task
                            item={item}
                            key={index}
                            index={index}
                            ref={el => taskRefs.current[index] = el}
                            setTasks={setTasks}
                            taskRefs={taskRefs}
                        />
                    ))
                    : "You have no task currently, please add some."}
            </div>
            <button id="createTask" onClick={handleNewTask}>
                <BiListPlus />
            </button>
        </div>
    );
}

export default TodoParent;