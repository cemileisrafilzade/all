import React, { useState, useEffect } from 'react';

import { postsFetch } from '../API/fetchAPI';


export const Article = (props) => {
    const [article, setArticle] = useState({
        loaded: false,
        title: '',
        desc: ''
    });

    useEffect(() => {
        (async () => {
            const res = await postsFetch(`?id=${props.match.params.id}`);
            if (res.length) {
                setArticle({
                    loaded: true,
                    title: res[0].title,
                    desc: res[0].description
                })
            } else {
                setArticle({
                    loaded: true,
                    title: "Nothing we got here",
                    desc: ""
                })
            }
        })()
    }, [])
    return (
        <div>
            {article.loaded ?
                <div>
                    <h1>{article.title}</h1>
                    <p>{article.desc}</p>
                </div>
                :
                <h1>Loading</h1>
            }
        </div>
    )
}