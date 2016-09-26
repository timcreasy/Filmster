import React from 'react';
import {AppRegistry} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from './views/Home';
import MovieDetailView from './views/MovieDetailView';

const Filmster = React.createClass({
  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Filmster" initial={true} />
          <Scene key="movieDetailView" title="Showtimes" component={MovieDetailView} />
        </Scene>
      </Router>
    );
  }
});

AppRegistry.registerComponent('Filmster', () => Filmster);
