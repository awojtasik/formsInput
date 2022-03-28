import React, { useState, useEffect } from 'react';

export const AgeGusserAnswer = (props) => {
  // przechowaj dane w state
  const [age, setAge] = useState(null);
  const [error, setError] = useState(null);

  // to jest dobre miejsce na uycie useEffect(() => {}, [])

  useEffect(async () => {
    try {
      setError(null);
      const res = await fetch(`https://api.agify.io/?name=${props.name}`);
      const data = await res.json();
      setAge(data.age);
      console.log(data);
    } catch (e) {
      setError('Błąd wczytywania!!!');
    }
  }, []);

  if (error) {
    return <p>{error}</p>;
  }

  if (age === null) {
    // return null;
    return <p>Wczytywanie danych ...</p>;
  }

  return (
    <>
      <p>Twój wiek: {age}</p>
      <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
      <p>Twoje imię to: {props.name}</p>
    </>
  );
};
