import React, { useState } from 'react';


const EditableInput = () => {
    const [isEditable, setIsEditable] = useState(false);

    const toggleEdit = () => {
        setIsEditable(!isEditable);
    };

    return (
        <div className="editable-input">
            <input type="text" readOnly={!isEditable} />
            <i class="fa-solid fa-pencil" className="edit-icon" onClick={toggleEdit}></i>
        </div>
    );
};

export default EditableInput;
