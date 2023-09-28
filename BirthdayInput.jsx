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
        <div class="input-containers">
            <div>
                <label for="month">Month</label>
                <input 
                class="bday-input dark-grey-bg"
                id="month"
                type="text"
                placeholder="MM" 
                value={month} 
                onChange={(e) => setMonth(e.target.value)}
                min="1"
                max="12"
                required
                />
            </div>

            <div>
                <label for="day">Day</label>
                <input 
                class="bday-input dark-grey-bg"
                id="day"
                type="text"
                placeholder="DD"  
                value={day} 
                onChange={(e) => setDay(e.target.value)}
                min="1"
                max="31"
                required
                />
            </div>

            <div>
                <label for="year">Year</label>
                <input 
                class="bday-input dark-grey-bg"
                id="year"
                type="text" 
                placeholder="YYYY" 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                required
                />
            </div>
        </div>
      
      
      
      <button type="submit">Submit</button>
    </form>
  );
}

export default BirthdayInput;