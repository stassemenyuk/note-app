import React from 'react';

export default function FormContent() {
  return (
    <>
      <div class="form-group">
        <label for="note-content">Text of the note </label>
        <input type="text" class="form-control" id="note-content" placeholder="Here" />
        <label for="note-category">Select category</label>
        <select id="note-category" class="form-control">
          <option>Task</option>
          <option>Random thought</option>
          <option>Idea</option>
        </select>
      </div>
      <button type="submit" class="btn btn-success">
        Enter
      </button>
    </>
  );
}
