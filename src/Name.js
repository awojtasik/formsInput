import React, { useState } from 'react';

export const Name = () => {
  // zamiast osobno trzymać formularze mona trzymać jeden wielki obiekt np. person
  // useState - zawiera w tym przypadku obiekt

  //   ta forma jest dobra dla przechowywania w jednym obiekcie
  const [person, setPerson] = useState({
    firstName: '',
    lastName: '',
    age: 0,
  });

  //   const [firstName, setFirstName] = useState('');
  //   const [lastName, setLastName] = useState('');
  //   const [age, setAge] = useState(0);

  // to robię na końcu jako wysłanie formularza

  const sendForm = (e) => {
    e.preventDefault();

    // console.log(firstName, lastName, age);
  };

  const change = (e) =>
    setPerson((person) => ({
      ...person,
      [e.target.name]: e.target.value,
    }));

  return (
    <form onSubmit={sendForm}>
      {/* onSubmit - to jest wysłanie formularza */}
      <p>
        <label>
          Name: <br />
          <input
            type="text"
            // value={firstName}
            value={person.firstName}
            name="firstName"
            // onChange={(e) => setFirstName(e.target.value)}

            // onChange={(e) =>
            //   setPerson((person) => ({
            //     // person zwroc nowy obiekt ktory ma byc taki sam jak poprzedni obiekt
            //     ...person,
            //     // firstName: e.target.value,
            //     [e.target.name]: e.target.value,
            //     // jak zastosuje name='firstName' i [e.target.value] to nie musze wszedzie powtarzac onChange moge napisac jedna funkcje change i ja wstrzelic
            //   }))
            // }

            onChange={change}
            // wez poprzedni obiekt i zmodyfikuj mu jedna rzecz pod jednym kluczem
          ></input>
        </label>
      </p>
      <p>
        <label>
          Surname: <br />
          <input
            type="text"
            value={person.lastName}
            name="lastName"
            // onChange={(e) => setLastName(e.target.value)}

            // onChange={(e) =>
            //   setPerson({
            //     ...person,
            //     lastName: e.target.value,
            //   })
            // }
            onChange={change}
          ></input>
        </label>
      </p>
      <p>
        <label>
          Age: <br />
          <input
            type="number"
            value={person.age}
            name="age"
            // onChange={(e) => setAge(Number(e.target.value))}

            // onChange={(e) =>
            //   setPerson({
            //     ...person,
            //     age: e.target.value,
            //   })
            // }
            onChange={change}
          ></input>
        </label>
      </p>
      <p>
        <button type="submit">Send</button>
      </p>
    </form>
  );
};
