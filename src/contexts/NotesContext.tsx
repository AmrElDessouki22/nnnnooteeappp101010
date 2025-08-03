'use client';

import React, { createContext, useState, useCallback } from 'react';

interface Note {
  id: string;
  text: string;
}

interface NotesContextType {
  notes: Note[];
  addNote: (text: string) => void;
  deleteNote: (id: string) => void;
}

export const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<Note[]>([]);

  const addNote = useCallback((text: string) => {
    setNotes(prevNotes => [...prevNotes, { id: Date.now().toString(), text }]);
  }, []);

  const deleteNote = useCallback((id: string) => {
    setNotes(prevNotes => prevNotes.filter(note => note.id !== id));
  }, []);

  return (
    <NotesContext.Provider value={{ notes, addNote, deleteNote }}>
      {children}
    </NotesContext.Provider>
  );
};
