const reducer = (state = [], action) => {
  let temp = JSON.parse(JSON.stringify(state));
  temp.actTasks = 0;
  temp.actRnd = 0;
  temp.actIdea = 0;
  temp.archTasks = 0;
  temp.archRnd = 0;
  temp.archIdea = 0;

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
    case 'COUNT':
      temp.notes.forEach((item) => {
        switch (item.category) {
          case 'Task':
            temp.actTasks++;
            break;
          case 'Random thought':
            temp.actRnd++;
            break;
          case 'Idea':
            temp.actIdea++;
            break;
          default:
            break;
        }
      });
      temp.archivedNotes.forEach((item) => {
        switch (item.category) {
          case 'Task':
            temp.archTasks++;
            break;
          case 'Random thought':
            temp.archRnd++;
            break;
          case 'Idea':
            temp.archIdea++;
            break;
          default:
            break;
        }
      });
      return temp;
    case 'EDIT':
      temp.notes[action.id].text = action.text;
      let datePattern = /\d+\/\d+\/\d+/;
      temp.notes[action.id].dates = datePattern.exec(action.text) || '-';
      return temp;

    default:
      return state;
  }
};

export default reducer;
