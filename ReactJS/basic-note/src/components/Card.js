import React from 'react';

export const Card = ({ heading, text }) => {
    // console.log(props);
    return (
        <div style={{
            marginTop: 20,
            padding: 20,
            border: '2px solid black'
        }}>
            <h3>{heading}</h3>
            <p>{text}</p>
        </div>
    )
}