import React from 'react';
import './App.css';
import { ButtonAppBar } from './Components/Navbar/Navbar';
import { Video } from './Components/Video/Video';
import { Information } from './Content/Information';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ButtonAppBar />
        <Video />
        <Information />
      </header>
    </div>
  );
}

export default App;
