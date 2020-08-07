import React, { useState } from 'react';
// import logo from './logo.svg';
// import './App.css';
import { AdvList } from './components/AdvList';
// import { TestClassComp } from './components/TestClassComp';

function App() {
  const [status, setStatus] = useState(false)

  return (
    <div className="App">
      {status && <AdvList />}
      <button onClick={() => setStatus(v => !v)}>toggle</button>
    </div>
  );
}

export default App;
