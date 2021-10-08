import React, { useState } from 'react';
import Table from '../table/Table';
import { useSelector } from 'react-redux';
import NotesBlock from '../NotesBlock';
import FormContent from '../create-form-content/FormContent';

import './App.css';

function App() {
  const notes = useSelector((state) => state.notes),
    archivedNotes = useSelector((state) => state.archivedNotes);
  const notesBlocks = getNoteOrArchiveBlocks(notes, false),
    archivedNotesBlocks = getNoteOrArchiveBlocks(archivedNotes, true);
  const notesHeaders = ['Time', 'Title', 'Category', 'Dates', 'Tools'];

  const [formVisibility, setFormVisibility] = useState(false);
  const [archiveVisibility, setArchiveVisibility] = useState(false);
  let createNoteClassnames = 'create-form',
    archivedNotesClassnames = 'archived-notes';
  if (!formVisibility) createNoteClassnames += ' hide';
  if (!archiveVisibility) archivedNotesClassnames += ' hide';

  return (
    <div className="app">
      <div className="notes">
        <h1>Your notes</h1>
        <Table blocks={notesBlocks} headers={notesHeaders} />
      </div>
      <button className="btn btn-success" onClick={() => setFormVisibility(!formVisibility)}>
        Create Note
      </button>
      <button
        className="btn btn-secondary"
        onClick={() => setArchiveVisibility(!archiveVisibility)}>
        Archived Notes
      </button>
      <div className={archivedNotesClassnames}>
        <h1>Archived Notes</h1>
        <Table blocks={archivedNotesBlocks} headers={notesHeaders} archive />
      </div>
      <form action="" className={createNoteClassnames}>
        <h2>Create Note</h2>
        <FormContent />
      </form>
    </div>
  );
}

function getNoteOrArchiveBlocks(arr, archive) {
  return arr.map(({ text, category, id, time, dates }) => {
    return (
      <NotesBlock
        key={id}
        text={text}
        category={category}
        time={time}
        dates={dates}
        id={id}
        archive={archive}
      />
    );
  });
}

export default App;
