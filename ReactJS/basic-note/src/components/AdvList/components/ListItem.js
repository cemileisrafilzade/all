import React from 'react';

export const ListItem = ({
    title,
    text,
    onDelete
}) => {
    return (
        <div className="list-item">
            <h4>{title}</h4>
            <p>{text}</p>
            <button onClick={onDelete}>delete</button>
        </div>
    )
}