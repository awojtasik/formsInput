import React, { useState } from 'react';

export const Checkbox = () => {
  const [inputCheckbox, setInputCheckbox] = useState(false);

  const sendCheckbox = (e) => {
    e.preventDefault();
    console.log(inputCheckbox);
  };

  return (
    <form onSubmit={sendCheckbox} style={{ padding: 60 }}>
      <label>
        <input
          type="checkbox"
          checked={inputCheckbox}
          onChange={(e) => setInputCheckbox(e.target.checked)}
        />
        I have one idea
      </label>
      <p>{!inputCheckbox && 'This input should be requaierd!'}</p>
      <p>{inputCheckbox ? 'You will send something' : 'We will not send...'}</p>
      <button type="submit">Send</button>
    </form>
  );
};
