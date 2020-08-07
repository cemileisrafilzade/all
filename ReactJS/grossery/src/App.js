import React, { useState, useEffect } from 'react';
import logo from './logo.svg';
import './App.css';

function App() {

  const [page, setPage] = useState(1);
  const [data, setData] = useState([]);
  const [pagesCount, setPagesCount] = useState(0);
  const [query, setQuery] = useState('');
  const [sort, setSort] = useState('');

  const getData = async () => {
    const res = await fetch(`http://localhost:3000/products?_page=${page}${query ? '&q=' + query : ''}${sort}`);
    const json = await res.json();

    setData(json);
  }

  const getPagesCount = async () => {
    const res = await fetch(`http://localhost:3000/products?${query ? '&q=' + query : ''}`);
    const json = await res.json();

    setPagesCount(json.length / 10);
  }

  const goTo = (page) => {
    setPage(page);
    getData();
  }

  const handleQuery = (e) => {
    setQuery(e.target.value);
    setPage(1);
    getData();
    getPagesCount();
  }

  const handleSort = (e) => {
    setSort(e.target.value);
    setPage(1);
    getData();
    getPagesCount();
  }

  useEffect(() => {
    getData();
    getPagesCount();
  }, []);

  let nav = [];
  for (let i = 1; i <= pagesCount; i++) {
    nav.push(<button key={i} onClick={() => goTo(i)}>{i}</button>);
  }

  return (
    <div className="App">
      <input onChange={handleQuery} />
      <select onChange={handleSort}>
        <option value="">Date</option>
        <option value="&_sort=price&_order=asc">Lower</option>
        <option value="&_sort=price&_order=desc">Higher</option>
      </select>
      {query}
      {data.map(({ id, name, price }) => <h2 key={id}>{name} -- ${price}</h2>)}
      {nav}
    </div>
  );
}

export default App;
