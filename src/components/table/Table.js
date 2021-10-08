import React from 'react';
import TableHeader from '../table-header/TableHeader';

import './Table.css';

export default function Table({ name, headers, blocks }) {
  return (
    <table className={name}>
      <TableHeader titles={headers} />
      <tbody>{blocks}</tbody>
    </table>
  );
}
