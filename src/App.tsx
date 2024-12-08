import React from 'react';
import logo from './logo.svg';
import './App.css';
import EntriesTable from "./entries/EntriesTable";
import EntryResolver from "./entries/EntryResolver";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>neuralcoral.io</h1>
      </header>
      <EntryResolver />
    </div>
  );
}

export default App;
