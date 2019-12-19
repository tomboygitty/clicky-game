import React from 'react';
import {Navbar} from 'react-bootstrap';
import Header from './components/Header';
import Grid from './components/Grid';
import './App.css';

function App() {
  return (
    <div>
      <Navbar >
        <ul>
        <li>Click an image to begin!</li>
        <li>Score: 0 | Top Score: 0</li>
        </ul>
      </Navbar>
      <Header />
      <Grid />
    </div>
  );
}

export default App;
