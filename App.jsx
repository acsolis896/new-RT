import React, { useState } from 'react';
import './style.css';
import ProfileInfo from './ProfileInfo';
import BirthdaySelection from './BirthdaySelection';
import GenreSelection from './GenreSelection';
import MovieSelection from './MovieSelection';
import TvSelection from './TvSelection';
import ProgressBar from './ProgressBar';

function App() {
  const [step, setStep] = useState(1); 
  const [selectedGenres, setSelectedGenres] = useState([]);
  const [month, setMonth] = useState('');
  const [day, setDay] = useState('');
  const [year, setYear] = useState('');


  const nextStep = () => {
    setStep(step + 1); // Move to the next step
  };

  const prevStep = () => {
    setStep(step - 1); // Move to the previous step
  };

  const isDateValid = () => {
    if (month.length !== 2 || day.length !== 2 || year.length !== 4) {
        return false;
    }
    const date = new Date(year, month - 1, day);
    return date && date.getMonth() + 1 === parseInt(month) && date.getDate() === parseInt(day);
};


  return (
    <main className="App">

        <ProgressBar currentStep={step}/>

      {step === 1 && <ProfileInfo />}
      {step === 2 && <BirthdaySelection month={month} setMonth={setMonth} day={day} setDay={setDay} year={year} setYear={setYear}/>}
      {step === 3 && <GenreSelection selectedGenres={selectedGenres} setSelectedGenres={setSelectedGenres}/>}
      {step === 4 && <MovieSelection />} 
      {step === 5 && <TvSelection />} 
      
      {/* Navigation buttons */}
    <div style={{ display: 'flex', gap: '10px' }}>
      {step > 1 && (
        <button onClick={prevStep}>Back</button>
      )}
      {step < 5 && (
        <button 
          className="next-button"
          onClick={nextStep} 
          disabled={(step === 2 && !isDateValid()) || (step === 3 && selectedGenres.length !== 3)}>
            Next
        </button>
      )}
      {step === 5 && (
        <button>Finish</button>
      )}
    </div>

    </main>
  );
}

export default App;