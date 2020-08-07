import React, { useState, useEffect } from 'react';
import { ServerTest } from "./ServerTest";

function App() {

  const [data, setData] = useState({ results: [] });
  console.log(data);

  const getData = async (url) => {
    const response = await fetch(url);
    const newData = await response.json();
    setData(data => ({
      ...newData,
      results: [...data.results, ...newData.results]
    }));
    // console.log(data);
  };

  const loadMore = () => {
    getData(data.next)
  }


  useEffect(() => {
    // getData('https://swapi.co/api/starships/');
  }, [])



  return (
    <div>
      {/* {!!data.results.length ? data.results.map(({ name, url }) => (
        <h4 key={url}>{name}</h4>
      )) :
        <h1>Loading</h1>
      }
      {data.next && <button onClick={loadMore}>Load More</button>} */}

      <ServerTest />
    </div>
  );
}

export default App;



let firstData = {
  count: 37,
  n: 'page?2',
  p: null,
  results: [1, 2, 3, 4, 5]
}

const secondData = {
  count: 37,
  n: 'page?3',
  p: 'page?1',
  results: [6, 7, 8, 9, 10]
}

firstData = {

}