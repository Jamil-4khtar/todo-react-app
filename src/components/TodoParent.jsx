import React, { useState, useRef, useEffect } from 'react';
import { BiListPlus } from 'react-icons/bi';
import Task from './Task';
import "../css/TodoParent.css";

function TodoParent() {
    const [tasks, setTasks] = useState([]);
    const taskRefs = useRef([]);

    const handleNewTask = () => {
        setTasks([...tasks, ""]);

        setTimeout(() => {
            const lastIndex = tasks.length;
            taskRefs.current[lastIndex].contentEditable = true;
            taskRefs.current[lastIndex].focus();
        }, 0);
    };

    const handleEdit = (index) => {
        if (taskRefs.current[index]) {
            taskRefs.current[index].contentEditable = true;
            taskRefs.current[index].focus();
        }
    };

    const handleSave = (index, newText) => {
        const newTasks = [...tasks];
        newTasks[index] = newText;
        setTasks(newTasks);
        if (taskRefs.current[index]) {
            taskRefs.current[index].contentEditable = false;
        }
    };

    const handleDelete = (index) => {
        setTasks((prevTasks) => prevTasks.filter((_, i) => i !== index));
    };
    console.log(tasks)
    return (
        <div>
            <h2>My Todo</h2>
            <div id="taskContainer">
                {tasks.length > 0
                    ? tasks.map((item, index) => (
                        <Task
                            item={item}
                            key={index}
                            index={index}
                            ref={el => taskRefs.current[index] = el}
                            handleEdit={handleEdit}
                            handleSave={handleSave}
                            handleDelete={handleDelete}
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