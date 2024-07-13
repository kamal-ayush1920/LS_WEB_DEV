import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Note from './components/Note';
import NoteForm from './components/Noteform';
import { NoteProvider } from './components/NoteContext';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode') === 'true';
    setDarkMode(savedMode);
  }, []);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkMode', !darkMode);
  };

  return (
    <NoteProvider>
      <div className={darkMode ? 'app dark-mode' : 'app light-mode'}>
        <div className="container">
          <header className="d-flex justify-content-between align-items-center my-3">
            <h1>Note Taking App</h1>
            <button className="btn btn-secondary" onClick={toggleDarkMode}>
              {darkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
          </header>
          <NoteForm />
          <Note />
        </div>
      </div>
    </NoteProvider>
  );
}

export default App;
