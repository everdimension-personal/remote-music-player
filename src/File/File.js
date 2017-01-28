import React, { PropTypes } from 'react';
import Icon from '../Icon';
import Entry from '../Entry';
import './File.css';

const propTypes = {
  file: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
};

function File({ file }) {
  return (
    <Entry>
      <div className="File">
        <Icon id="play_circle_filled" className="File__icon" />
        {' '}
        <span className="v-middle">
          {file.name}
        </span>
      </div>
    </Entry>
  );
}

File.propTypes = propTypes;

export default File;
