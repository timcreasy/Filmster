import React from 'react';
import {
  StyleSheet,
  View,
} from 'react-native';
import MovieNews from './MovieNews';
import MoviesNearMe from './MoviesNearMe';


const Home = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <MovieNews />
        <MoviesNearMe />
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 35,
    flex: 1,
  }
});

module.exports = Home;
