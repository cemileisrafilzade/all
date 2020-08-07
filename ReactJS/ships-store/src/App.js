import React, { useState, useEffect } from 'react';

import {
  SingleProduct,
  Cart
} from './components';

function App() {

  const [data, setData] = useState({
    count: null,
    next: null,
    prev: null,
    results: []
  })

  const [cart, setCart] = useState([]);

  const getData = async (url) => {
    const res = await fetch(url);
    const json = await res.json();

    setData(data => ({
      ...json,
      results: [...data.results, ...json.results]
    }))
  }

  const loadMore = () => {
    getData(data.next)
  }

  const addToCart = (name, cost, url) => {
    if (!isNaN(cost)) {
      const isAvailable = cart.find((item) => url === item.url);

      if (isAvailable) {
        setCart(cart => cart.map(item => {
          if (item.url === url) {
            return {
              ...item,
              count: item.count + 1
            }
          }
          return item
        }))
      } else {
        setCart(cart => [...cart, {
          name,
          cost,
          url,
          count: 1
        }])
      }

    }

  }

  useEffect(() => {
    getData('https://swapi.co/api/starships/');
  }, [])

  return (
    <div className="App">
      <div className="products-list">
        {data.results.map(({ name, cost_in_credits, url }) => (
          <SingleProduct
            key={url}
            name={name}
            cost={cost_in_credits}
            onClick={() => addToCart(name, cost_in_credits, url)}
          />
        ))}
        {!!data.next &&
          <button
            className="load-more"
            onClick={loadMore}
          >Load more</button>
        }
      </div>

      <Cart
        cart={cart}
        setCart={setCart}
      />

    </div>
  );
}

export default App;
