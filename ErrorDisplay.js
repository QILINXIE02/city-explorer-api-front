import React from 'react';
import styles from './ErrorDisplay.module.css'; 

function ErrorDisplay({ message }) {
  return (
    <div className={styles.errorDisplay}> 
      {message}
    </div>
  );
}

export default ErrorDisplay;
