import React, { useState } from 'react';

function BirthdaySelection({ month, setMonth, day, setDay, year, setYear }) {

  const handleSubmit = (e) => {
    e.preventDefault();
    // Code to save the birthday information to Firebase
    // For example:
    // const date = new Date(year, month - 1, day);
    // firebaseFunctionToSaveDate(date);
};

  return (
    <div className="bday-container page-width-medium">
        <div className="bday-info">
            <h2>Please provide your date of birth 🎂</h2>
            <p>Date of birth will allow us to tailor age-appropriate content and will not be shared with any third parties.</p>
        <form onSubmit={handleSubmit}>
        <div className="input-containers">
            <div className="inputs-div">
                <label htmlFor="month">Month</label>
                <input 
                className="bday-input dark-grey-bg"
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

            <div className="inputs-div">
                <label htmlFor="day">Day</label>
                <input 
                className="bday-input dark-grey-bg"
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

            <div className="inputs-div">
                <label htmlFor="year">Year</label>
                <input 
                className="bday-input dark-grey-bg"
                id="year"
                type="text" 
                placeholder="YYYY" 
                value={year} 
                onChange={(e) => setYear(e.target.value)}
                required
                />
            </div>
        </div>
      
        </form>
        </div>

        <div className="bday-movies-div">
            <p>We love our birthday movies 🎉 </p>
            <div className="bday-movies-posters">
                <img className="bday-poster" src="https://lumiere-a.akamaihd.net/v1/images/p_theprincessdiaries_19875_2ef7e437.jpeg" alt="Princess Diaries movie poster"/>
                <img className="bday-poster" src="https://www.themoviedb.org/t/p/original/iNZdSIfhSCMtRILDNyhLn8UKeSG.jpg" alt="13 Going On 30 movie poster"/>
                <img className="bday-poster" src="https://images.moviesanywhere.com/1bc2d132045b10e6f5a47ae681a963b2/c7f8b91c-eaf7-4d55-b0df-49d1841b9ddb.jpg" alt="This Is 40 movie poster"/>
                <img className="bday-poster" src="https://cdn11.bigcommerce.com/s-yzgoj/images/stencil/1280x1280/products/397835/4681056/apivhtqbx__68694.1625668960.jpg?c=2" alt="17 Again movie poster"/>
            </div>
        </div>
    </div>
  );
}

export default BirthdaySelection;