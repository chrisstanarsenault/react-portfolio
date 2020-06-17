import React from 'react';

import Header from './components/header/Header';
import Main from './components/main-section/Main';

import './styles/App.scss';

function App() {
  return (
    <div className="app-container">
      <Header />
      <Main />
    </div>
  );
}

export default App;
