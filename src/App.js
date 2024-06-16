import React from 'react';
import Tooltip from './Tooltip';
import './App.css';

function App() {
  return (
    <div className="App">
            <h1>Tooltip Demo</h1>
            <Tooltip position="right" message="Thanks for hovering! I'm a tooltip">
                <button>Hover over me!</button>
            </Tooltip>
        </div>
  );
}

export default App;
