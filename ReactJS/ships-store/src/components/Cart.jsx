import React from 'react';

export const Cart = ({ cart, setCart }) => {

    const removeFromCart = (url, count) => {
        if (count > 1) {
            setCart(cart => cart.map(item => {
                if (item.url === url) {
                    return {
                        ...item,
                        count: item.count - 1
                    }
                }
                return item
            }))
        } else {
            setCart(cart => cart.filter(item => item.url !== url))
        }
    }

    return (
        <div className="cart">
            <h3>Total:
                {cart.reduce((total, { cost, count }) => total + cost * count, 0)}
            </h3>
            {cart.map(({ name, cost, url, count }) => (
                <div key={url}>
                    <h4>{name}</h4>
                    <i>{cost}</i>
                    <br />
                    <b>{count}</b>
                    <br />
                    <button
                        onClick={() => removeFromCart(url, count)}
                    >X</button>
                </div>
            ))}
        </div>
    )
}