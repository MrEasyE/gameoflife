import React from 'react';
import './App.css';

import Board from './components/board';
import Info from './components/info';
import Footer from './components/footer';

function App() {
  return (
    <div className="App">
      <Info />
      <Board />
      <Footer />
    </div>
  );
}

export default App;
