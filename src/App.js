import React, { useState } from 'react';
import { Gender } from './Gender';
import { Checkbox } from './Checkbox';
import { Square } from './Sqare';
import { Name } from './Name';
import { Dialog } from './Dialog';
import './App.css';
import { ConfirmDialog } from './ConfirmDialog';
import { AgeGusser } from './AgeGusser';
import { BitcoinPrice } from './BitcoinPrice';
import { StartHook } from './StartHook';

// export const App = (props) => {
//   const [firstName, setFirstName] = useState('');

//   const changeFirstName = (e) => {
//     setFirstName(e.target.value.toUpperCase());
//   };

//   const color = firstName[0] === '@' ? 'green' : 'red';
//   // komponent kontrolowany
//   // Co nam to daje?
//   //  - mozna wyświetlać gdzie indziej jego wartość,

//   const sendForm = (e) => {
//     // setFirstName(e.preventDefault());
//     e.preventDefault();
//     console.log(firstName);
//   };

//   return (
//     <>
//       <form onSubmit={sendForm} style={{ padding: 20 }}>
//         <h1>{firstName}</h1>
//         <input
//           type="text"
//           name="firstName" // name potrzebuje do wysyłki form, w adres url się pojawia
//           value={firstName}
//           onChange={changeFirstName}
//           style={{ backgroundColor: `${color}` }}
//         />
//         <p>You are entered {firstName.length} characters.</p>
//         {/* return <input type="text" value={firstName} onChange={e => setFirstName(e.target.value)} />; */}

//         {/* Przesyłanie formularza */}
//         <button type="submit">SEND</button>
//       </form>
//       <Gender />
//       <Checkbox />
//       <Square />
//       <Name />
//       <Dialog />
//     </>
//   );
// };

export const App = (props) => {
  return (
    <>
      {/* <AgeGusser /> */}
      <BitcoinPrice />
      <StartHook />
    </>
    // <>
    //   <AgeGusser />
    //   {/* <p>
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum
    //   </p> */}
    //   {/* <Dialog body="Hello Aga! Welcom ine a main page!" /> */}
    //   <Dialog>"Hello Aga! Welcom ine a main page!"</Dialog>
    //   {/* <Dialog body="Second message ..." /> */}
    //   {/* <Dialog
    //     // w propsach mogę przekazywać jsx, to jest super funkcjonalnosć
    //     body={
    //       <>
    //         <h1>Title ...</h1>
    //         <p>Hello!</p>
    //         <p>Good morning</p>
    //       </>
    //     }
    //   /> */}
    //   {/* {props.children} */}
    //   <Dialog title="Main web">
    //     <h1>Title ...</h1>
    //     <p>Hello!</p>
    //     <p>Good morning</p>
    //   </Dialog>
    //   <ConfirmDialog title="Are you sure">
    //     <p>What are you doinig</p>
    //   </ConfirmDialog>
    //   <p>
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum
    //   </p>
    //   <p>
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum
    //   </p>
    //   <p>
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum Lorem ipsum
    //     Lorem ipsum Lorem ipsum
    //   </p>
    // </>
  );
};
