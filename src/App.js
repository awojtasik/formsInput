import React, { useState } from 'react';
import './App.css';

export const App = (props) => {
  const [firstName, setFirstName] = useState('');

  const changeFirstName = (e) => {
    setFirstName(e.target.value.toUpperCase());
  };

  const color = firstName[0] === '@' ? 'green' : 'red';
  // komponent kontrolowany
  // Co nam to daje?
  //  - mozna wyświetlać gdzie indziej jego wartość,

  return (
    <>
      <h1>{firstName}</h1>
      <input
        type="text"
        value={firstName}
        onChange={changeFirstName}
        style={{ backgroundColor: `${color}` }}
      />
      <p>You are entered {firstName.length} characters.</p>
      {/* return <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />; */}
    </>
  );
};
