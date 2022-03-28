import React, { useEffect, useState } from 'react';
import { AgeGusserAnswer } from './AgeGusserAnswer';

// export const AgeGusser = (props) => {
//   // przechowaj dane w state
//   const [age, setAge] = useState(null);
//   const [error, setError] = useState(null);

//   // to jest dobre miejsce na uycie useEffect(() => {}, [])

//   useEffect(async () => {
//     try {
//       setError(null);
//       const res = await fetch('https://api.agify.io/?name=Paweł');
//       const data = await res.json();
//       setAge(data.age);
//       console.log(data);
//     } catch (e) {
//       setError('Błąd wczytywania!!!');
//     }
//   }, []);

//   if (error) {
//     return <p>{error}</p>;
//   }

//   if (age === null) {
//     // return null;
//     return <p>Wczytywanie danych ...</p>;
//   }

//   return (
//     <>
//       <p>Twój wiek: {age}</p>
//       <p>Twoja data urodzenia: {new Date().getFullYear() - age}</p>
//     </>
//   );
// };

export const AgeGusser = (props) => {
  const [name, setName] = useState('');
  //   muszę sprawdzić e ktoś wysłąłze chce sprawdzic swoje imie
  const [check, setCheck] = useState(false);

  const sendForm = (e) => {
    e.preventDefault();
    setCheck(true);
  };

  if (check) {
    return <AgeGusserAnswer name={name} />;
  }

  return (
    <>
      <form onSubmit={sendForm}>
        <label>
          Podaj imię: <br />
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <button type="submit">Zgadnij mój wiek</button>
        </label>
      </form>
    </>
  );
};
