import React, { useState } from 'react';

import { createFetch } from '../../API/fetchAPI';

export const Create = (props) => {

    const [fields, setFields] = useState({
        title: '',
        desc: ''
    });

    const fieldsChangeHandler = e => {
        const name = e.target.name;
        const value = e.target.value;

        setFields(fields => ({
            ...fields,
            [name]: value
        }))
    }

    const submitHandler = async e => {
        e.preventDefault();
        if (fields.title !== '' && fields.desc !== '') {
            const answer = await createFetch('', {
                id: Date.now(),
                date: Date.now(),
                title: fields.title,
                description: fields.desc
            });

            if (answer.date) {
                props.history.push('/');
            } else {
                alert('Something goes wrong, try later.')
            }

        } else {
            alert('Something missing')
        }
    }

    return (
        <div>
            <h1>Create</h1>
            <form onSubmit={submitHandler}>
                <input
                    name="title"
                    value={fields.title}
                    onChange={fieldsChangeHandler}
                    type="text" />
                <textarea
                    value={fields.desc}
                    onChange={fieldsChangeHandler}
                    name="desc"
                ></textarea>
                <button>Create</button>
            </form>
        </div>
    )
}