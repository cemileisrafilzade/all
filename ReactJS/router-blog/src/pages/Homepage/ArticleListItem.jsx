import React from 'react';
import { Link } from 'react-router-dom';

export const ArticleListItem = ({ title, date, id }) => {

    const dateObj = new Date(date);

    const formatDate = val => val < 10 ? `0${val}` : val;

    const month = formatDate(dateObj.getMonth() + 1);
    const day = formatDate(dateObj.getDate());


    return (
        <Link
            to={`/article/${id}`}
            className="article-list-item">
            <h3>{title}</h3>
            {month}/{day}
        </Link>
    )
}