import React from 'react';
import { useSelector } from 'react-redux';

export default function CounterBlocks() {
  const { actTasks, archTasks, actRnd, archRnd, actIdea, archIdea } = useSelector((state) => state);
  return [
    <tr key={0}>
      <td>Task</td>
      <td>{actTasks}</td>
      <td>{archTasks}</td>
    </tr>,
    <tr key={1}>
      <td>Random thought</td>
      <td>{actRnd}</td>
      <td>{archRnd}</td>
    </tr>,
    <tr key={2}>
      <td>Idea</td>
      <td>{actIdea}</td>
      <td>{archIdea}</td>
    </tr>,
  ];
}
