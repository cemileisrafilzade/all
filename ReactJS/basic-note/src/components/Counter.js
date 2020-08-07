import React, { useState } from 'react';

export const Counter = () => {
    const [count, setCount] = useState(100);
    return (
        <div>
            <h1>{count}</h1>
            <div style={{
                width: count,
                height: count,
                background: 'red',
                margin: '20px auto',
                transition: 'all .4s ease'
            }} />
            <button onClick={() => setCount((count) => count + 50)}>+</button>
        </div>
    )
}