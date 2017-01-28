import React, { PropTypes } from 'react';
import Icon from '../Icon';
import '../styles/Grid.css';
import './CurrentSong.css';

const propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

function CurrentSong({ isPlaying }) {
  return (
    <div className="CurrentSong">
      <div className="Grid Grid--align-center">
        <div className="Cell">
          <button className="no-btn">
            <Icon id={isPlaying ? 'pause_circle_filled' : 'play_arrow'} />
          </button>
          {' '}
          <span>
            Artist — Song Name
          </span>
        </div>
        <div className="Cell">
          <span>
            0:23
          </span>

        </div>
      </div>
    </div>
  );
}

CurrentSong.propTypes = propTypes;

export default CurrentSong;
