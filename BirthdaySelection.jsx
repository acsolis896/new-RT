import React, { useState } from 'react';
import BirthdayInput from './BirthdayInput';

function BirthdaySelection() {
  const [birthday, setBirthday] = useState('');

  const handleBirthdayChange = (e) => {
    setBirthday(e.target.value);
  };

  // Integrate Firebase to save the birthday information

  return (
    <div class="bday-container">
        <div class="bday-info">
            <h2>Please provide your date of birth 🎂</h2>
            <p>Date of birth will allow us to tailor age-appropriate content and will not be shared with any third parties.</p>
            <BirthdayInput/>
        </div>
        <div class="bday-movies-div">
            <p>We love our birthday movies 🎉 </p>
            <div class="bday-movies-posters">
                <img class="bday-poster" src="https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg" alt="Princess Diaries movie poster"/>
                <img class="bday-poster" src="https://www.themoviedb.org/t/p/original/iNZdSIfhSCMtRILDNyhLn8UKeSG.jpg" alt="13 Going On 30 movie poster"/>
                <img class="bday-poster" src="https://images.moviesanywhere.com/1bc2d132045b10e6f5a47ae681a963b2/c7f8b91c-eaf7-4d55-b0df-49d1841b9ddb.jpg" alt="This Is 40 movie poster"/>
                <img class="bday-poster" src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/397835/4681056/apivhtqbx__68694.1625668960.jpg?c=2" alt="17 Again movie poster"/>
            </div>
        </div>
    </div>
  );
}

export default BirthdaySelection;