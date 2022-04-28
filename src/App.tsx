import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import FrontPage from './pages/FrontPage';
import './App.css';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <header className="App-pokemon">
          <FrontPage />
        </header>
      </div>
    </BrowserRouter>
  );
}

export default App;
