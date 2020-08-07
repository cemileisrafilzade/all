import React, { useContext } from 'react';
import { AuthContext } from '../../context/AuthContext';

import { ArticlesList } from '../../components';

export const Profile = () => {
    const { username, id } = useContext(AuthContext);

    return (
        <div>
            <h1>Hello, {username}</h1>
            <ArticlesList filter={{ author: id }} />
        </div>
    )
}