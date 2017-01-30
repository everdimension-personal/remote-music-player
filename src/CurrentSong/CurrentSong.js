/* global fetch */
import React, { PropTypes } from 'react';
import Song from '../Song';
import '../styles/Grid.css';
import './CurrentSong.css';

const propTypes = {
  isPlaying: PropTypes.bool.isRequired,
};

class CurrentSong extends React.Component {
  static handlePlayToggle() {
    fetch('/api/pause', { method: 'POST' });
  }

  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch('/api/nowplaying')
      .then(res => res.json())
      .then(song => this.setState({
        song,
      }));
  }

  render() {
    const { song } = this.state;
    if (!song) {
      return null;
    }
    return (
      <Song
        song={song}
        onPlayToggle={CurrentSong.handlePlayToggle}
      />
    );
  }
}

CurrentSong.propTypes = propTypes;

export default CurrentSong;
