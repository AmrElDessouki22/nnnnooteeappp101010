"use client";

import { useContext } from 'react';
import { NotesContext } from '../contexts/NotesContext';
import Note from './Note';

const Notes = () => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('NotesContext is undefined, please verify you are calling useContext within a NotesProvider.');
  }
  const { notes } = context;

  return (
    <div className="notes">
      {notes.map(note => (
        <Note key={note.id} note={note} />
      ))}
    </div>
  );
};

export default Notes;
