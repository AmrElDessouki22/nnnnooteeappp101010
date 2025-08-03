'use client';

import React, { useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext';

interface NoteItemProps {
  note: { id: string; text: string };
}

const NoteItem: React.FC<NoteItemProps> = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="border p-2 mb-2 flex justify-between items-center">
      <span>{note.text}</span>
      <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
    </div>
  );
};

export default NoteItem;
