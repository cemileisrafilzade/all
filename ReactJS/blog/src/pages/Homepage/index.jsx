import React from 'react';

import { SingeArticleLink } from './components/SingeArticleLink';

export const Homepage = ({ data, provideActiveArticle }) => {

    return (
        <div>
            <h3>Our News</h3>
            {data.map(({ title, id }) => (
                <SingeArticleLink
                    key={id}
                    title={title}
                    onClick={() => provideActiveArticle(id)} />
            ))}
        </div>
    )
}