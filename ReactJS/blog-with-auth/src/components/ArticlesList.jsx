import React, { useState, useEffect, useContext } from 'react';
import { getArticles } from '../API';

import { ThemeContext } from '../context/ThemeContext';

export const ArticlesList = ({ filter = {} }) => {

    const { theme } = useContext(ThemeContext);

    const [articles, setArticles] = useState({
        loaded: false,
        list: []
    });

    useEffect(() => {
        (async () => {
            const answer = await getArticles(filter);
            setArticles({
                loaded: true,
                list: answer
            });
        })();
    }, []);

    return (
        <div className="articles-list">

            {articles.loaded ?
                <>
                    {!!articles.list.length ?
                        articles.list.map(({ id, title, author }) => (
                            <div
                                className="article"
                                key={id}
                                style={{
                                    ...theme,
                                    transition: 'all .3s ease'
                                }}
                            >
                                <div style={{ float: 'right' }}>{author}</div>
                                <h3>{title}</h3>
                            </div>
                        ))
                        :
                        <h2>Sorry, no any articles at the moment</h2>
                    }
                </>

                :
                <h2>Loading</h2>
            }
        </div>
    )

}