import React, { useState, useEffect } from 'react';

import { postsFetch } from '../../API/fetchAPI';

import { ArticleListItem } from './ArticleListItem'

export const Homepage = () => {

    const [posts, setPosts] = useState([]);

    useEffect(() => {
        (async () => {
            const data = await postsFetch();
            setPosts(data);
        })()
    }, [])

    return (
        <div>
            <h1>Homepage</h1>
            {!!posts.length ?
                posts.map(({ id, date, title }) => (
                    <ArticleListItem
                        key={id}
                        date={date}
                        title={title}
                        id={id}
                    />
                ))
                :
                null
            }
        </div>
    )
}