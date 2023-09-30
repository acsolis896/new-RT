import React from 'react';
import './style.css';

const ProgressBar = ({ currentStep, totalSteps = 5 }) => {
    return (
        <div className="progress-bar">
            <div className="line"></div>
            {Array.from({ length: totalSteps + 1 }).map((_, index) => (
                <div 
                    key={index} 
                    className={`dot ${index === 0 || index < currentStep + 1 ? 'completed' : ''} ${index === currentStep ? 'current' : ''}`}
                ></div>
            ))}
        </div>
    );
}


export default ProgressBar;