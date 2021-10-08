import React from 'react';
import TableHeader from '../table-header/TableHeader';

import './Table.css';

export default function Table(props) {
  return (
    <table>
      <TableHeader titles={props.headers} />
      <tbody>{props.blocks}</tbody>
    </table>
  );
}
