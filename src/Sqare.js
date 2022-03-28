import React, { useState } from 'react';
import './Square.css';

export const Square = () => {
  const [backgroundColor, setbackgroundColor] = useState('#ff0000');

  return (
    <>
      <div>
        <select
          value={backgroundColor}
          onChange={(e) => setbackgroundColor(e.target.value)}
          style={{ marginLeft: 25 }}
        >
          <option value="#ff0000">Red</option>
          <option value="#00ff00">Green</option>
          <option value="#0000ff">Blue</option>
        </select>
      </div>
      <div>
        <input
          type="color"
          value={backgroundColor}
          onChange={(e) => setbackgroundColor(e.target.value)}
          style={{ marginLeft: 25 }}
        />
      </div>
      <div className="Color" style={{ backgroundColor }} />
    </>
  );
};
