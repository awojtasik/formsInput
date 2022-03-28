import React, { useState } from 'react';

export const StartHook = () => {
  const [count, setCount] = useState(0);

  return (
    <>
      <div>
        <p>Naciśnięto {count} razy</p>
        <button onClick={() => setCount(count + 1)}>Click me!</button>
      </div>
    </>
  );
};
