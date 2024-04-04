import React from 'react';
import './css/ErrorDisplay.module.css'; 

function ErrorDisplay({ message }) {
  return (
    <div className="error-display">
      {message}
    </div>
  );
}

export default ErrorDisplay;
