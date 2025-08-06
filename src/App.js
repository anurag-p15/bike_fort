import './App.css';
import React, { useEffect } from 'react';

function App() {
  useEffect(() => {
    document.title = "Bike Fort";
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <img src="https://i.postimg.cc/ydRbg8cZ/IMG-0536.png" className="App-logo" alt="logo" />
        <p>
          Launching Soon !!!.
        </p>
      </header>
    </div>
  );
}

export default App;
