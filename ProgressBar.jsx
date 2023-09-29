import React from 'react';
import './style.css';

const ProgressBar = ({ currentStep, totalSteps = 5 }) => {
    return (
        <div>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div className="progress-bar" key={index} className={`dot ${index < currentStep ? 'completed' : ''}`}></div>
            ))}
        </div>
    );
}

export default ProgressBar;