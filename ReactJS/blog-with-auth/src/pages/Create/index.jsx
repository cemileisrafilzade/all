import React, { useState, useContext } from 'react';

import { AuthContext } from '../../context/AuthContext';
import { createArticle } from '../../API';

export const Create = ({ history }) => {
    const { id } = useContext(AuthContext);

    const [fields, setFields] = useState({
        title: '',
        desc: ''
    });

    const handleInputs = e => {
        const { name, value } = e.target;
        setFields(fields => ({
            ...fields,
            [name]: value
        }));
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        if (fields.title !== '' && fields.desc !== '') {
            const answer = await createArticle({
                author: id,
                ...fields
            })

            if (answer.title) {
                history.push('/profile');
            }
        }
    }

    return (
        <div>
            <h1>Create</h1>

            <form className="auth-form" onSubmit={onSubmit}>
                <input
                    type="text"
                    name="title"
                    value={fields.title}
                    onChange={handleInputs}
                />
                <textarea
                    type="text"
                    name="desc"
                    value={fields.desc}
                    onChange={handleInputs}
                />

                <button>Create</button>
            </form>
        </div>
    )
}