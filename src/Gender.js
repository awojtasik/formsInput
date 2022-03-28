import React, { useState } from 'react';

export const Gender = () => {
  const [gender, setGender] = useState('');

  const sendGender = (e) => {
    e.preventDefault();
    console.log(gender);
  };

  return (
    <form onSubmit={sendGender} style={{ padding: 50 }}>
      <select
        name="gender"
        value={gender}
        onChange={(e) => setGender(e.target.value)}
      >
        <option value="">-wybierz-</option>
        <option value="Woman">Woman</option>
        <option value="M">Man</option>
      </select>
      <p>You've entered {gender.length} characters</p>
      <button type="submit">Save</button>
    </form>
  );
};
