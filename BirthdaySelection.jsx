import React, { useState } from 'react';

function BirthdaySelection() {
  const [birthday, setBirthday] = useState('');

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  // Integrate Firebase to save the birthday information

  return (
    <div>
        <div class="bday-info">
            <h2>Please provide your date of birth 🎂</h2>
            <p>Date of birth will allow us to tailor age-appropriate content and will not be shared with any third parties.</p>
            <input
            class="bday-input"
            type="date"
            value={birthday}
            onChange={handleBirthdayChange}
            />
        </div>
        <div class="bday-movies-div">
            <p>We love our birthday movies 🎉 </p>
            <div class="bday-movies-posters">
                <img src="" alt=""></img>
                <img src="" alt=""></img>
                <img src="" alt=""></img>
                <img src="" alt=""></img>
            </div>
        </div>
    </div>
  );
}

export default BirthdaySelection;