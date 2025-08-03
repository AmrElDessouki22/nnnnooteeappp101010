"use client";

import { createContext, useState, useContext, ReactNode } from 'react';
import { NoteType } from '../types';

interface NotesContextType {
  notes: NoteType[];
  updateNote: (note: NoteType) => void;
}

const NotesContext = createContext<NotesContextType | undefined>(undefined);

export const NotesProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [notes, setNotes] = useState<NoteType[]>([]);

  const updateNote = (updatedNote: NoteType) => {
    setNotes(prevNotes =>
      prevNotes.map(note => (note.id === updatedNote.id ? updatedNote : note))
    );
  };

  return (
    <NotesContext.Provider value={{ notes, updateNote }}>
      {children}
    </NotesContext.Provider>
  );
};

export const useNotes = (): NotesContextType => {
  const context = useContext(NotesContext);
  if (!context) {
    throw new Error('useNotes must be used within a NotesProvider');
  }
  return context;
};
