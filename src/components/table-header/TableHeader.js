import React from 'react';

export default function TableHeader(props) {
  const titles = props.titles.map((item, index) => {
    return <th key={index}>{item}</th>;
  });

  return (
    <thead>
      <tr>{titles}</tr>
    </thead>
  );
}
