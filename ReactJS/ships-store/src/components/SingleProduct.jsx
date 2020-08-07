import React from 'react';

export const SingleProduct = ({ name, cost, onClick }) => {
    return (
        <div
            className="single-product"
            onClick={onClick}
        >
            <h4>{name}</h4>
            <h6>{cost}</h6>
        </div>
    )
}