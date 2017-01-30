import React, { PropTypes } from 'react';
import './Spinner.css';

const propTypes = {
  centered: PropTypes.bool,
};

const defaultProps = {
  centered: false,
};

function Spinner({ centered }) {
  return (
    <div className={centered ? 'Spinner__block' : ''}>
      <div className="Spinner">
        <span />
        <span />
        <span />
        <span />
        <span />
      </div>
    </div>
  );
}

Spinner.propTypes = propTypes;
Spinner.defaultProps = defaultProps;

export default Spinner;
