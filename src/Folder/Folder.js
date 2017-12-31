import React, { PropTypes } from 'react';
import { Link } from 'react-router-dom';
import Icon from '../Icon';
import Entry from '../Entry';
import './Folder.css';

const propTypes = {
  folder: PropTypes.shape({
    name: PropTypes.string.isRequired,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

function Folder({ folder, path }) {
  return (
    <Entry>
      <Link className="Folder" to={`${path === '/' ? '' : path}/${folder.name}`}>
        <Icon id="folder" className="Folder__icon" />
        {' '}
        <span className="v-middle">
          {folder.name}
        </span>
      </Link>
    </Entry>
  );
}

Folder.propTypes = propTypes;

export default Folder;
