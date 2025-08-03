'use client';

import React, { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext';
import NoteItem from './NoteItem';

const NotesList = () => {
  const { notes } = useContext(NotesContext);

  return (
    <div>
      {notes.map(note => (
        <NoteItem key={note.id} note={note} />
      ))}
    </div>
  );
};

export default NotesList;
