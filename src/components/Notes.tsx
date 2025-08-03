"use client";

import { useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import Note from './Note';

const Notes = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div className="notes">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
