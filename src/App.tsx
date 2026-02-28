import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import EntryResolver from "./entries/EntryResolver";

function App() {
    return (
        <BrowserRouter>
            <div className="App">
                <header className="App-header">
                    <a href="/" style={{ textDecoration: 'none', color: 'inherit' }}>
                        <h1>neuralcoral.io</h1>
                    </a>
                </header>

                <Routes>
                    <Route path="/" element={<EntryResolver />} />
                    <Route path="/:postId" element={<EntryResolver />} />
                </Routes>
            </div>
        </BrowserRouter>
    );
}

export default App;