import React from 'react';
import NotesList from '../components/features/NotesList';
import AddNote from '../components/features/AddNote';

const HomePage = () => {
  return (
    <div>
      <h1 className="text-2xl font-bold">My Notes</h1>
      <AddNote />
      <NotesList />
    </div>
  );
};

export default HomePage;
