import React from 'react';

export const SingeArticleLink = ({ title, onClick }) => {
    return (
        <div onClick={onClick} className="article-link" >
            <h4>{title}</h4>
        </div>
    )
}