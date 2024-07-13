import React, { useState, useContext } from 'react';
import { NoteContext } from './NoteContext';

function NoteForm() {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const { addNote } = useContext(NoteContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote(title, content);
    setTitle('');
    setContent('');
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="form-group">
        <input 
          type="text" 
          className="form-control" 
          placeholder="Title" 
          value={title} 
          onChange={(e) => setTitle(e.target.value)} 
          required 
        />
      </div>
      <div className="form-group">
        <textarea 
          className="form-control" 
          placeholder="Content" 
          value={content} 
          onChange={(e) => setContent(e.target.value)} 
          required 
        ></textarea>
      </div>
      <button type="submit" className="btn btn-primary">Add Note</button>
    </form>
  );
}

export default NoteForm;
