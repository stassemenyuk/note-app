import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addItem, countItems } from '../../actions/actions';

export default function FormContent() {
  const [text, setText] = useState('');
  const [category, setCategory] = useState('Task');
  const dispatch = useDispatch();
  return (
    <form
      action=""
      onSubmit={(e) => {
        e.preventDefault();
        if (text === '') return;
        let elem = {};
        elem.text = text;
        elem.time = new Date().toLocaleTimeString();
        elem.category = category;
        let datePattern = /\d+\/\d+\/\d+/;
        elem.dates = datePattern.exec(text) || '-';
        dispatch(addItem(elem, 'note'));
        dispatch(countItems());
        setText('');
      }}>
      <h2>Create Note</h2>

      <div className="form-group">
        <label htmlFor="note-content">Text of the note </label>
        <input
          onChange={(e) => setText(e.target.value)}
          type="text"
          className="form-control"
          id="note-content"
          placeholder="Here"
          value={text}
        />
        <label htmlFor="note-category">Select category</label>
        <select
          onChange={(e) => setCategory(e.target[e.target.options.selectedIndex].label)}
          id="note-category"
          className="form-control">
          <option>Task</option>
          <option>Random thought</option>
          <option>Idea</option>
        </select>
      </div>
      <button type="submit" className="btn btn-success">
        Enter
      </button>
    </form>
  );
}
