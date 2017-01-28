import React, { PropTypes } from 'react';
import BackFolder from '../BackFolder';
import Folder from '../Folder';
import File from '../File';
import Icon from '../Icon';

const propTypes = {
  // files: PropTypes.array,
  directory: PropTypes.shape({
    folders: PropTypes.array,
  }).isRequired,
  path: PropTypes.string.isRequired,
};

function Tree({ directory: { folders = [], files = [] }, path }) {
  const empty = !files.length && !folders.length;

  return (
    <div>
      {path !== '/' && (
        <BackFolder back path={path} />
      )}
      {empty && (
        <div style={{ textAlign: 'center', marginTop: 20 }}>
          <Icon
            id="folder_open"
            style={{
              fontSize: '4rem',
              color: '#ddd',
            }}
          />
          <p>Folder is empty</p>
        </div>
      )}
      {folders.map(f => (
        <Folder folder={f} path={path} key={`folder-${path}${f.name}`} />
      ))}
      {files.map(f => (
        <File file={f} key={`file-${path}${f.name}`} />
      ))}
    </div>
  );
}

Tree.propTypes = propTypes;

export default Tree;
