import React from 'react';
import { Route } from 'react-router-dom';
import CurrentSong from './CurrentSong';
import Spinner from './Spinner';
import Tree from './Tree';
import TreeRouteResolver from './Tree/TreeRouteResolver';
import PlayerControls from './PlayerControls';
import './App.css';

const ResolvedTree = TreeRouteResolver(Tree);

class App extends React.Component {
  constructor() {
    super();
    this.state = {};
  }

  componentWillMount() {
    fetch('/api/dirlist') // eslint-disable-line no-undef
      .then(res => res.json())
      .then(res => this.setState({
        directory: res,
      }));
  }

  render() {
    const { directory } = this.state;

    if (!directory) {
      return <Spinner centered />;
    }

    return (
      <div className="App">
        <CurrentSong />
        <PlayerControls />

        <br />
        <br />

        <main>
          <Route
            pattern="/*"
            render={props => (
              <ResolvedTree {...props} rootDirectory={directory} />
            )}
          />
        </main>
      </div>
    );
  }
}

export default App;
