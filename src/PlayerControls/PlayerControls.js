/* global fetch */
import React from 'react';
import Icon from '../Icon';
import './PlayerControls.css';

const propTypes = {};

class PlayerControls extends React.Component {
  static handleVolumeUp() {
    fetch('/api/volup', { method: 'POST' });
  }

  static handleVolumeDown() {
    fetch('/api/voldown', { method: 'POST' });
  }

  render() {
    return (
      <div className="PlayerControls">
        <button className="Control__button" onClick={PlayerControls.handleVolumeDown}>
          <Icon id="volume_down" />
        </button>
        <button className="Control__button" onClick={PlayerControls.handleVolumeUp}>
          <Icon id="volume_up" />
        </button>
      </div>
    );
  }
}

PlayerControls.propTypes = propTypes;

export default PlayerControls;
