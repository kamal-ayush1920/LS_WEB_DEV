import React, { useContext } from 'react';
import { NoteContext } from './NoteContext';

function Note() {
  const { notes, deleteNote } = useContext(NoteContext);

  return (
    <div className="row">
      {notes.map((note) => (
        <div key={note.id} className="col-md-4">
          <div className="card mb-4">
            <div className="card-body">
              <h5 className="card-title">{note.title}</h5>
              <p className="card-text">{note.content}</p>
              <button className="btn btn-danger" onClick={() => deleteNote(note.id)}>Delete</button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Note;
