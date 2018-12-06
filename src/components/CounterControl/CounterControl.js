import React from 'react';
import './CounterControl.css';

const CounterControl = ({ label, clicked }) => (
   <div className="CounterControl" onClick={clicked}>
      {label}
   </div>
);

export default CounterControl;
