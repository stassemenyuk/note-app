import React, { useState } from 'react';
import Table from '../table/Table';
import { useSelector } from 'react-redux';
import NotesBlock from '../NotesBlock';
import FormContent from '../create-form-content/FormContent';
import CounterBlocks from '../CounterBlocks';

import './App.css';

function App() {
  const notes = useSelector((state) => state.notes),
    archivedNotes = useSelector((state) => state.archivedNotes);
  const notesBlocks = getNoteOrArchiveBlocks(notes, false),
    archivedNotesBlocks = getNoteOrArchiveBlocks(archivedNotes, true);
  const notesHeaders = ['Time', 'Title', 'Category', 'Dates', 'Tools'];
  const counterHeaders = ['Note category', 'Active', 'Archive'];

  const [formVisibility, setFormVisibility] = useState(false);
  const [archiveVisibility, setArchiveVisibility] = useState(false);
  let createNoteClassnames = 'create-form',
    archivedNotesClassnames = 'archived-notes';
  if (!formVisibility) createNoteClassnames += ' hide';
  if (!archiveVisibility) archivedNotesClassnames += ' hide';

  return (
    <div className="app">
      <div className="notes">
        <h2>Your notes</h2>
        <Table name={'note-list'} blocks={notesBlocks} headers={notesHeaders} />
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
        <h2>Archived Notes</h2>
        <Table name={'note-list'} blocks={archivedNotesBlocks} headers={notesHeaders} archive />
      </div>
      <div className={createNoteClassnames}>
        <FormContent />
      </div>
      <div className="counter-table">
        <Table name={'stats'} blocks={CounterBlocks()} headers={counterHeaders} />
      </div>
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
