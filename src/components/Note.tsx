"use client";

import { useState } from 'react';
import { NoteType } from '../types';
import EditNote from './EditNote';

interface NoteProps {
  note: NoteType;
}

const Note: React.FC<NoteProps> = ({ note }) => {
  const [isEditing, setIsEditing] = useState(false);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  return (
    <div className="note">
      {isEditing ? (
        <EditNote note={note} onClose={() => setIsEditing(false)} />
      ) : (
        <>
          <h2>{note.title}</h2>
          <p>{note.content}</p>
          <button onClick={handleEditClick}>Edit</button>
        </>
      )}
    </div>
  );
};

export default Note;
