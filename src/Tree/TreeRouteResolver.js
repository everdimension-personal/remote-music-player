/* global window */
import React, { PropTypes } from 'react';

function findDirectory(rootDirectory, path) {
  const directory = rootDirectory.folders.find(f => f.name === path[0]);
  if (directory) {
    if (path.length === 1) {
      return directory;
    }
    return findDirectory(directory, path.slice(1));
  }
  return null;
}

const enhanceTree = (Component) => {
  const propTypes = {
    pathname: PropTypes.string.isRequired,
    rootDirectory: PropTypes.object.isRequired,
  };

  function TreeRouteResolver(props) {
    const { pathname, rootDirectory } = props;
    const normalizedPath = decodeURIComponent(pathname);
    let directory;
    if (normalizedPath === '/') {
      directory = rootDirectory;
    } else {
      directory = findDirectory(rootDirectory, normalizedPath.slice(1).split('/'));
    }

    return <Component directory={directory} path={normalizedPath} />;
  }

  TreeRouteResolver.propTypes = propTypes;

  return TreeRouteResolver;
};

export default enhanceTree;
