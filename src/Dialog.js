import React from 'react';
import { App } from './App';
import './Dialog.css';

export const Dialog = (props) => {
  return (
    <div className="Dialog__container">
      {
        // jak jest title to wyświetlaj pasek - myk z podwojnym &&
        props.title && <div className="Dialog__title">{props.title}</div>
      }

      <div className="Dialog__content">
        {/* {props.body} */}
        {props.children}
      </div>
    </div>
  );
};

// props.children pochodzi z App.js z poniszego zapisu
// <Dialog>
//         <h1>Title ...</h1>
//         <p>Hello!</p>
//         <p>Good morning</p>
//       </Dialog>
