import React, { forwardRef, useRef, useEffect, useState } from 'react';
import { BiSolidTrashAlt, BiEdit } from 'react-icons/bi';

// eslint-disable-next-line react/display-name
const Task = forwardRef(({ item, index, handleEdit, handleSave, handleDelete }, ref) => {
    const taskDiv = useRef(null);
    const [text, setText] = useState(item);

    const handleBlur = () => {
        handleSave(index, text);
    };


    return (
        <div id={index} ref={taskDiv} className="task">
            <p
                ref={ref}
                contentEditable={false}
                onBlur={handleBlur}
                onInput={(e) => setText(e.currentTarget.textContent)}
            >
                {item}
            </p>
            <div>
                <button onClick={() => handleEdit(index)}>
                    <BiEdit />
                </button>
                <button onClick={() => handleDelete(index)}>
                    <BiSolidTrashAlt />
                </button>
            </div>
        </div>
    );
});

export default Task;