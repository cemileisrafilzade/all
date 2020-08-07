import React, { useState, useEffect } from 'react';
import './style.css';

import { ListItem } from './components/ListItem';

export const AdvList = () => {
    // State for handle fields input
    const formDataDefState = {
        title: '',
        text: ''
    };
    const [formData, setFormData] = useState(formDataDefState);

    // Prepare out list of items state
    const [list, setList] = useState([]);

    // Update fields values
    const fieldChangeHandler = (e) => {
        // Change field value in state using name attribute
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        })
    };

    // remove item with filtering by ID
    const deleteItem = (id) => {
        setList(list => {
            return list.filter(item => item.id !== id)
        })
    };

    const addItem = (e) => {
        e.preventDefault();

        setList(list => {
            const newList = [
                ...list,
                {
                    title: formData.title,
                    text: formData.text,
                    id: Date.now()
                }]
            console.log('push data to storage');
            localStorage.setItem('list', JSON.stringify({
                data: newList
            }))
            return newList;
        });
        setFormData(formDataDefState);
    }

    useEffect(() => {
        const listData = localStorage.getItem('list');
        console.log('mounted');
        if (listData) {
            console.log('data exist');
            setList(JSON.parse(listData).data);
        }
    }, [])

    return (
        <div className="container">
            <form className="form" onSubmit={addItem}>
                {/* Handle fields with state */}
                <input
                    value={formData.title}
                    onChange={fieldChangeHandler}
                    name="title"
                    placeholder="Title"
                    type="text" />
                <textarea
                    value={formData.text}
                    onChange={fieldChangeHandler}
                    name="text"
                    placeholder="Text"></textarea>
                <button>ADD</button>
            </form>

            <div className="list">
                {/* Create list based on our "list" state */}
                {list.map(({ id, title, text }) => (
                    // Use for items prepared component
                    <ListItem
                        key={id}
                        title={title}
                        text={text}
                        onDelete={() => deleteItem(id)}
                    />
                ))}
            </div>
        </div>
    )
}