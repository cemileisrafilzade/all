import React, { useContext } from 'react';
import { Layout } from '../../commons';

import { CartContext } from '../../context/cart'

export const Cart = () => {

    const { cartProducts, removeFromCart } = useContext(CartContext);

    return (
        <Layout>
            <h1>Cart</h1>
            {cartProducts.map(({ id, name, price, image, uniqLocalId }) => (
                <div key={uniqLocalId}>
                    <img src={image} alt={name} />
                    <h5>{name} --- {price}</h5>
                    <button onClick={() => removeFromCart(uniqLocalId)}>delete</button>
                </div>
            ))}
        </Layout>
    )
}