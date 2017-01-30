/* global fetch, Headers */
import React, { PropTypes } from 'react';
import Icon from '../Icon';
import Entry from '../Entry';
import './File.css';

const MUSIC_EXTS = ['mp3', 'ogg', 'wav', 'm4a'];

const propTypes = {
  file: PropTypes.string.isRequired,
};

class File extends React.Component {
  constructor() {
    super();
    this.play = this.play.bind(this);
  }

  play() {
    const { file } = this.props;
    const fullSongName = `${file.path}/${file.name}`;
    fetch('/api/play', {
      method: 'POST',
      body: JSON.stringify({ song: fullSongName }),
      headers: new Headers({ 'Content-Type': 'application/json' }),
    });
  }

  render() {
    const { file } = this.props;
    const lastDotPos = file.name.lastIndexOf('.');
    const ext = lastDotPos === -1 ? 'unknown' : file.name.slice(lastDotPos + 1);
    const isMusicFile = MUSIC_EXTS.indexOf(ext) !== -1;
    const fileIcon = (
      <Icon
        id={isMusicFile ? 'play_circle_filled' : 'insert_drive_file'}
        className={`File__icon ${isMusicFile ? 'File__icon--music' : ''}`}
      />
    );

    return (
      <Entry>
        <div className="File">
          {isMusicFile ? (
            <button onClick={isMusicFile ? this.play : null} className="no-btn">
              {fileIcon}
            </button>
          ) : (
            fileIcon
          )}
          {' '}
          <span className="v-middle">
            {file.name}
          </span>
        </div>
      </Entry>
    );
  }
}

File.propTypes = propTypes;

export default File;
