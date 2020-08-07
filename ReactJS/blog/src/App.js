import React, { useState } from 'react';

import { dummyData } from './dummyData';
import { Homepage, Article, Create } from './pages';
import { Layout } from './components/Layout';

import { Task1, Task2, Task3, Task4, Task5 } from './tasks';

function App() {

  const [data, setData] = useState(dummyData);
  const [activeArticle, setActiveArticle] = useState(null);
  const [currentPage, setCurrentPage] = useState('homepage');


  const provideActiveArticle = id => {
    setCurrentPage('article');
    setActiveArticle(data.find(item => item.id == id));
  }
  const removeActiveArticle = () => {
    setCurrentPage('homepage');
    setActiveArticle(null);
  }

  let ActiveComponent = (<h1>Sorry, wrong page.</h1>);
  if (currentPage === 'homepage') {
    ActiveComponent = (<Homepage
      data={data}
      provideActiveArticle={provideActiveArticle} />)
  } else if (currentPage === 'article') {
    ActiveComponent = (<Article
      article={activeArticle}
      removeActiveArticle={removeActiveArticle} />)
  } else if (currentPage === 'create') {
    ActiveComponent = (<Create />)
  }

  return (
    <div className="App">
      {/* <Layout goTo={setCurrentPage}>
        {ActiveComponent}
      </Layout> */}
      <Task5 />
    </div>
  );
}

export default App;
