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
  // Card,
  ListItem
} from 'react-native-elements';
import getMovies from '../data/getMovies';
import getPoster from '../data/getPoster';
import Carousel from "react-native-carousel-control";
import {Card, CardItem, Thumbnail } from 'native-base';
import { Actions } from 'react-native-router-flux';

const MoviesNearMe = React.createClass({

  getInitialState() {
    return ({ movies: [] });
  },

  componentDidMount() {
    this.loadMovies();
  },

  loadMovies() {
    return getMovies()
      .then(movies => {

        // Add default poster
        movies.forEach((movie, index) => {
          movie.poster = 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/220px-Question_mark.svg.png';
          this.loadPosters(movie.title, index);
        });

        this.setState({ movies: movies });
      })
      .catch(err => {
        console.log("ERR", err);
      });
  },

  loadPosters(title, index) {
    return getPoster(title)
      .then(movie => {
        let moviesArray = this.state.movies;
        let poster;
        if (movie.results.length > 0) {
          poster = `https://image.tmdb.org/t/p/w154${movie.results[0].poster_path}`;
        } else {
          poster = `https://upload.wikimedia.org/wikipedia/commons/thumb/d/d2/Question_mark.svg/220px-Question_mark.svg.png`;
        }
        moviesArray[index].poster = poster
        this.setState({ movies: moviesArray });
      })
      .catch(err => {
        console.log("ERR", err);
      });
  },

  /*render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>In Theaters</Text>
          </View>
          <ScrollView>
          {
            this.state.movies.map((movie, index) => {

              return (
                <Card
                  key={index} >
                  <ListItem
                    title={movie.title}
                    avatar={{uri: movie.poster}} />
                  <Text>{movie.shortDescription}</Text>
                </Card>
              );
            })
          }
          </ScrollView>
        </View>
      </View>
    );
  } */



    render() {
    return (
      <View style={styles.container}>
        <View style={styles.bottomContainer}>
          <View style={styles.headerContainer}>
            <Text style={styles.header}>In Theaters</Text>
          </View>
          <ScrollView>
          {
            this.state.movies.map((movie, index) => {

              return (
                <Card key={index}>
                  <CardItem button onPress={() => console.log("CARD SELECTED")}>
                    <Thumbnail source={{uri: movie.poster}} />
                    <Text>{movie.title}</Text>
                    <Text note>RELEASE DATE</Text>
                  </CardItem>
                  <CardItem cardBody button onPress={() => console.log("CARD SELECTED")}>
                    <Text>{movie.shortDescription}</Text>
                  </CardItem>
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
    flex: 1
  },
  headerContainer: {
    alignItems: 'center',
  },
  header: {
    fontSize: 20
  },
  bottomContainer: {
    flex: 4
  }
});

module.exports = MoviesNearMe;