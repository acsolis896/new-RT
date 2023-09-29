import React, { useState } from 'react';

function BirthdayInput() {



  return (
    <form onSubmit={handleSubmit}>
        <div class="input-containers">
            <div class="inputs-div">
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

            <div class="inputs-div">
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

            <div class="inputs-div">
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
      
    </form>
  );
}

export default BirthdayInput;