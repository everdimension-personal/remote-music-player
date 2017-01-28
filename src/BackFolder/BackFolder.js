import React, { PropTypes } from 'react';
import Link from 'react-router/Link';
import Icon from '../Icon';
import Entry from '../Entry';
import './BackFolder.css';

const propTypes = {
  path: PropTypes.string.isRequired,
};

function BackFolder({ path }) {
  const prevPath = path.split('/');
  prevPath.pop();
  return (
    <Entry>
      <Link className="BackFolder" to={prevPath.join('/')}>
        <Icon id="arrow_back" className="BackFolder__icon" />
        {' '}
        <span className="v-middle">
          . .
        </span>
      </Link>
    </Entry>
  );
}

BackFolder.propTypes = propTypes;

export default BackFolder;
