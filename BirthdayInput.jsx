import React, { useState } from 'react';

function BirthdayInput() {
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    const date = new Date(year, month - 1, day); // month - 1 because months are 0-indexed in JS Date object
    console.log(date);  // Handle the date as you wish
  }

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Month:
        <input 
          type="text"
          placeholder="MM" 
          value={month} 
          onChange={(e) => setMonth(e.target.value)}
          min="1"
          max="12"
          required
        />
      </label>
      <label>
        Day:
        <input 
          type="text"
          placeholder="DD"  
          value={day} 
          onChange={(e) => setDay(e.target.value)}
          min="1"
          max="31"
          required
        />
      </label>
      <label>
        Year:
        <input 
          type="text" 
          placeholder="YYYY" 
          value={year} 
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}

export default BirthdayInput;