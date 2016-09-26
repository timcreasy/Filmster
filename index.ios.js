import React from 'react';
import {AppRegistry} from 'react-native';
import {Scene, Router} from 'react-native-router-flux';
import Home from './views/Home';
import MovieDetailView from './views/MovieDetailView';
import Beacons from './views/Beacons';
import {Actions} from 'react-native-router-flux'

const Filmster = React.createClass({

  goToBeaconsView() {
    console.log("GOING TO BEACON VIEW");
    Actions.beacons();
  },

  render() {
    return (
      <Router>
        <Scene key="root">
          <Scene key="home" component={Home} title="Filmster" initial={true} onRight={this.goToBeaconsView} rightButtonImage={require('./imgs/phyweb.png')}/>
          <Scene key="movieDetailView" title="Showtimes" component={MovieDetailView} />
          <Scene key="beacons" title="Beacons Near Me" component={Beacons} />
        </Scene>
      </Router>
    );
  }
});

AppRegistry.registerComponent('Filmster', () => Filmster);
