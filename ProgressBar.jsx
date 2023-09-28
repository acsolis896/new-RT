import React from 'react';
import './style.css';

const ProgressBar = ({ currentStep, totalSteps = 5 }) => {
    return (
        <div className="progress-bar">
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div key={index} className={`dot ${index < currentStep ? 'completed' : ''}`}></div>
            ))}
        </div>
    );
}

export default ProgressBar;