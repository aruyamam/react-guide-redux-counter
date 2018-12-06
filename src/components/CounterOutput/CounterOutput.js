import React from 'react';
import PropTypes from 'prop-types';
import './CounterOutput.css';

const CounterOutput = ({ value }) => (
   <div className="CounterOutput">
      {`Current Counter:
      ${value}`}
   </div>
);

CounterOutput.propType = {
   value: PropTypes.string.isRequired,
};

export default CounterOutput;
