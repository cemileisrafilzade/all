import React from 'react';
import './style.sass';

import { ArticlesList } from '../../components';

export const Homepage = () => {
    return (
        <div className="homepage">
            <h1>Homepage</h1>
            <ArticlesList />
        </div>
    )
}