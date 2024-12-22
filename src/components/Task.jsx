import React, { forwardRef, useEffect, useRef } from 'react';
import { BiSolidTrashAlt, BiEdit } from 'react-icons/bi';




// eslint-disable-next-line react/display-name
const Task = forwardRef(({ item, index, setTasks, taskRefs }, ref) => {
    const taskDiv = useRef(null)

    const handleEdit = (e) => {
        const itemIndex = e.currentTarget.getAttribute('data-index');
        // taskRefs.current.map(item => item.contentEditable = false)
        if (taskRefs.current[itemIndex]) {
            taskRefs.current[itemIndex].contentEditable = true;
            taskRefs.current[itemIndex].focus();
        }
    };

    const handleDelete = (e) => {
        const itemIndex = e.currentTarget.getAttribute('data-index');
        setTasks((prevTasks) => prevTasks.filter((_, i) => i != itemIndex));
    };

    const handleSave = () => {
        taskRefs && taskRefs.current.map(item => item.contentEditable = false)
    };

    return (
        <div id={index} ref={taskDiv} className="task">
            <p id={index} onBlur={handleSave} ref={ref}>{item}</p>
            <div>
                <button data-index={index} onClick={handleEdit}>
                    <BiEdit />
                </button>
                <button data-index={index} onClick={handleDelete}>
                    <BiSolidTrashAlt />
                </button>
            </div>
        </div>
    );
});

export default Task;