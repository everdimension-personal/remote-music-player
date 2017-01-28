import React, { PropTypes } from 'react';
import './Entry.css';

const propTypes = {
  children: PropTypes.element.isRequired,
};

function Entry({ children }) {
  return (
    <div className="Entry">{children}</div>
  );
}

Entry.propTypes = propTypes;

export default Entry;
