const initialState = {
  notes: [
    {
      time: '11:32:14 AM',
      text: 'Pick up children from school 10/8/2021',
      category: 'Task',
      dates: '10/8/2021',
      id: 0,
    },
    {
      time: '11:32:52 AM',
      text: 'Should i buy a Bitcoin? ',
      category: 'Random thought',
      dates: '-',
      id: 1,
    },
    {
      time: '11:33:12 AM',
      text: 'Wash dishes',
      category: 'Task',
      dates: '-',
      id: 2,
    },
  ],
  archivedNotes: [],
  notesCounter: 3,
  archivedNotesCounter: 0,
};

export default initialState;
