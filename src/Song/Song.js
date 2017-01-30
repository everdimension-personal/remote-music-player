import React, { PropTypes } from 'react';
import Icon from '../Icon';
import '../styles/Grid.css';
import './Song.css';

const propTypes = {
  isPlaying: PropTypes.bool,
  song: PropTypes.shape({
    artist: PropTypes.string,
    track: PropTypes.string,
    duration: PropTypes.string,
  }).isRequired,
  onPlayToggle: PropTypes.func.isRequired,
};

const defaultProps = {
  isPlaying: false,
};

function Song({ isPlaying, song, onPlayToggle }) {
  return (
    <div className="Song">
      <div className="Grid Grid--align-center">
        <div className="Cell Song__content">
          <button className="no-btn btn-icon" onClick={onPlayToggle}>
            <Icon id={isPlaying ? 'pause_circle_filled' : 'play_arrow'} />
          </button>
          {' '}
          <span>
            {song.artist} — {song.track}
          </span>
        </div>
        <div className="Cell">
          <span className="Song__duration">
            {song.duration}
          </span>

        </div>
      </div>
    </div>
  );
}

Song.propTypes = propTypes;
Song.defaultProps = defaultProps;

export default Song;
