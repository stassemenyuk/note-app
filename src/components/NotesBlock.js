import React from 'react';
import { addItem, deleteItem, countItems } from '../actions/actions';
import { useDispatch, useSelector } from 'react-redux';

export default function NotesBlock(props) {
  const notes = useSelector((state) => state.notes),
    archivedNotes = useSelector((state) => state.archivedNotes);
  const dispatch = useDispatch();
  const { time, text, category, dates, archive, id } = props;
  let tools = '';
  if (archive) {
    tools = (
      <button
        className=" btn btn-secondary"
        onClick={() => {
          let elem = JSON.parse(JSON.stringify(archivedNotes[id]));
          dispatch(addItem(elem, 'note'));
          dispatch(deleteItem(id, 'arch'));
          dispatch(countItems());
        }}>
        Unarchive
      </button>
    );
  } else {
    tools = (
      <>
        <button
          className=" btn btn-secondary"
          onClick={() => {
            let elem = JSON.parse(JSON.stringify(notes[id]));
            dispatch(addItem(elem, 'arch'));
            dispatch(deleteItem(id, 'note'));
            dispatch(countItems());
          }}>
          Archive
        </button>
        <button
          className=" btn btn-danger"
          onClick={() => {
            dispatch(deleteItem(id, 'note'));
            dispatch(countItems());
          }}>
          X
        </button>
      </>
    );
  }

  return (
    <tr>
      <td>{time}</td>
      <td>{text}</td>
      <td>{category}</td>
      <td>{dates}</td>
      <td>{tools}</td>
    </tr>
  );
}
