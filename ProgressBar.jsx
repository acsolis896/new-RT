import React from 'react';
import './style.css';

const ProgressBar = ({ currentStep, totalSteps = 5 }) => {
    return (
        <div className="progress-bar">
            <div className="line"></div>
            {Array.from({ length: totalSteps }).map((_, index) => (
                <div 
                    key={index} 
                    className={`dot ${index < currentStep ? 'completed' : ''} ${index === currentStep - 1 ? 'current' : ''}`}
                ></div>
            ))}
        </div>
    );
}


export default ProgressBar;