"use client";

import { useState, useContext } from 'react';
import { NotesContext } from '../context/NotesContext';
import { NoteType } from '../types';

interface EditNoteProps {
  note: NoteType;
  onClose: () => void;
}

const EditNote: React.FC<EditNoteProps> = ({ note, onClose }) => {
  const [title, setTitle] = useState(note.title);
  const [content, setContent] = useState(note.content);
  const { updateNote } = useContext(NotesContext);

  const handleSave = () => {
    updateNote({ ...note, title, content });
    onClose();
  };

  return (
    <div className="edit-note">
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />
      <button onClick={handleSave}>Save</button>
      <button onClick={onClose}>Cancel</button>
    </div>
  );
};

export default EditNote;
