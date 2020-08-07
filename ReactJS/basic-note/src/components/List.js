import React from 'react';

export const List = () => {
    const listItemStyle = {
        border: '2px solid black',
        padding: 15,
    }
    const data = [2, 3, 4, 1, 6, 5];
    const list = data.map((item, index) => (
        <li style={{
            ...listItemStyle,
            opacity: (item / 10)
        }} key={index} > {`Item ${item}`}</li >
    ))

    return (
        <ul>
            {list}
        </ul>
    )
}