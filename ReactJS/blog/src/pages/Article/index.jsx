import React from 'react';

export const Article = ({ article: { title, content }, removeActiveArticle }) => {
    return (
        <article>
            <button onClick={removeActiveArticle}>Go back</button>
            <hr />
            <h1>{title}</h1>
            <hr />
            <p>{content}</p>
        </article>
    )
}