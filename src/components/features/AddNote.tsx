'use client';

import React, { useState, useContext } from 'react';
import { NotesContext } from '../../contexts/NotesContext';
import Button from '../ui/Button';
import Input from '../ui/Input';

const AddNote = () => {
  const [noteText, setNoteText] = useState('');
  const { addNote } = useContext(NotesContext);

  const handleAddNote = () => {
    if (noteText.trim() === '') return;
    addNote(noteText);
    setNoteText('');
  };

  return (
    <div className="mb-4">
      <Input 
        label="New Note" 
        value={noteText} 
        onChange={(e) => setNoteText(e.target.value)} 
      />
      <Button label="Add Note" onClick={handleAddNote} />
    </div>
  );
};

export default AddNote;
