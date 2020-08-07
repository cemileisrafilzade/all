import React from 'react';

export const ServerTest = () => {

    const getData = async () => {
        const res = await fetch('http://localhost:3000/posts');
        const data = await res.json();
        console.log(data);
    }
    getData();

    const addData = async (text) => {
        const res = await fetch('http://localhost:3000/posts', {
            method: 'POST',
            body: JSON.stringify({
                id: Date.now(),
                title: text
            }),
            headers: {
                'Content-Type': 'application/json'
            }
        });
        const data = await res.json();
        console.log(data);
    }

    addData('Test ' + Date.now());



    return (
        <h1></h1>
    )
}