import React from 'react';
import Match from 'react-router/Match';
import CurrentSong from './CurrentSong';
import Tree from './Tree';
import TreeRouteResolver from './Tree/TreeRouteResolver';
import './App.css';

const directory = {
  name: '/',
  folders: [
    {
      name: 'Music',
      folders: [
        {
          name: 'Synth',
          folders: [
            {
              name: 'Some folder',
            },
            {
              name: 'Another folder',
            },
          ],
          files: [
            {
              name: 'Track 1',
            },
            {
              name: 'Track 2',
            },
          ],
        },
        {
          name: 'Rock',
          files: [
            {
              name: 'Indie mega rock band — A transition from the edge',
            },
            {
              name: 'Rock 2',
            },
          ],
        },
      ],
    },
  ],
};

const ResolvedTree = TreeRouteResolver(Tree);

function App() {
  return (
    <div className="App">
      <CurrentSong />

      <br />
      <br />

      <main>
        <Match
          pattern="/*"
          render={props => (
            <ResolvedTree {...props} rootDirectory={directory} />
          )}
        />
      </main>
    </div>
  );
}

export default App;
