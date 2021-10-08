const reducer = (state = [], action) => {
  let temp = JSON.parse(JSON.stringify(state));
  switch (action.type) {
    case 'ADD':
      if (action.arr === 'note') {
        action.element.id = temp.notesCounter;
        temp.notes = [...temp.notes, action.element];
        temp.notesCounter = temp.notes.length;
        temp.archivedNotesCounter = temp.archivedNotes.length;
      } else {
        action.element.id = temp.archivedNotesCounter;
        temp.archivedNotes = [...temp.archivedNotes, action.element];
        temp.notesCounter = temp.notes.length;
        temp.archivedNotesCounter = temp.archivedNotes.length;
      }

      return temp;
    case 'DELETE':
      if (action.arr === 'note') {
        temp.notes = [...temp.notes.slice(0, action.id), ...temp.notes.slice(action.id + 1)];
        temp.notes.forEach((item) => {
          if (item.id > action.id) {
            item.id--;
          }
        });
        temp.notesCounter = temp.notes.length;
        temp.archivedNotesCounter = temp.archivedNotes.length;
      } else {
        temp.archivedNotes = [
          ...temp.archivedNotes.slice(0, action.id),
          ...temp.archivedNotes.slice(action.id + 1),
        ];
        temp.archivedNotes.forEach((item) => {
          if (item.id > action.id) {
            item.id--;
          }
        });
        temp.notesCounter = temp.notes.length;
        temp.archivedNotesCounter = temp.archivedNotes.length;
      }
      return temp;
    default:
      return state;
  }
};

export default reducer;
