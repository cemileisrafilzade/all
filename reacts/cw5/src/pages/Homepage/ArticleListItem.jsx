import  React from 'react';

export const ArticleListItem = ({title,date}) => {
   const dateObj = new Date(date);

   const formatDate = val =>val<10?`0${val}`:val;
   const month = formatDate(dateObj.getMonth()+1);
   const day = formatDate(dateObj.getDate());

   
    return (
        <div className ="article-list-item">
<h3>{title}</h3>
   {month}/{day}
        </div>
    )
}