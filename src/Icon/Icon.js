import React, { PropTypes } from 'react';
import './Icon.css';

const propTypes = {
  id: PropTypes.string.isRequired,
  className: PropTypes.string,
};

const defaultProps = {
  className: '',
};

function Icon({ id, className, ...domProps }) {
  return (
    <i
      {...domProps}
      className={`icon material-icons ${className}`}
    >{id}</i>
  );
}

Icon.propTypes = propTypes;
Icon.defaultProps = defaultProps;

export default Icon;
