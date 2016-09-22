import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
import {
  Card,
  ListItem
} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";
import getMovies from './data/getMovies';

const Filmster = React.createClass({

  getInitialState() {
    return ({ movies: [] });
  },

  componentDidMount() {
    this.loadMovies();
  },

  loadMovies() {
    return getMovies()
      .then(movies => {
        this.setState({ movies: movies.results });
      })
      .catch(err => {
        console.log("ERR", err);
      });
  },

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.topContainer}>
          <Text>Top Container</Text>
        </View>
        <View style={styles.bottomContainer}>
          <ScrollView>
          {
            this.state.movies.map((movie, index) => {

              let poster = `https://image.tmdb.org/t/p/w154${movie.backdrop_path}`;

              return (
                <Card
                  key={index} >
                  <ListItem
                    title={movie.original_title}
                    avatar={{uri: poster}} />
                  <Text>{movie.overview}</Text>
                </Card>
              );
            })
          }
          </ScrollView>
        </View>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 4
  }
});

AppRegistry.registerComponent('Filmster', () => Filmster);
