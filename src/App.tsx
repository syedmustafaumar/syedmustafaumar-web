import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './NavBar';
import About from './About';

function App() {
  return (
    <div className="App">
      <NavBar />
      <About />
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.tsx</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <MyButton />
        <p>Hello there.<br />How do you do?</p>
      </header>
    </div>
  );
}

function MyButton() {
  return (
    <button>I am Amazing!</button>
  );
}

export default App;
