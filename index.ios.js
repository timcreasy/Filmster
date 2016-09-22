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
import getNews from './data/getNews';
import Carousel from "react-native-carousel-control";


const Filmster = React.createClass({

  getInitialState() {
    return ({ movies: [], news: [] });
  },

  componentDidMount() {
    this.loadNews();
    this.loadMovies();
  },

  loadNews() {
    return getNews()
      .then(articles => {
        this.setState({ news: articles.value });
      })
      .catch(err => {
        console.log("ERR", err);
      });
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
          <Carousel>
            {
            this.state.news.map((article, index) => {

              let articleImage = article.image.thumbnail.contentUrl;

              return (
                <Card style={styles.carouselCard}
                  key={index} >
                  <ListItem
                    title={article.name}
                    avatar={{uri: articleImage}} />
                  <ScrollView>
                    <Text>{article.description}</Text>
                  </ScrollView>
                </Card>
              );
            })
          }
          </Carousel>
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
    paddingTop: 30,
    flex: 1,
  },
  topContainer: {
    flex: 2,
  },
  bottomContainer: {
    flex: 4
  },
  carouselCard: {
    flex: 1
  }
});

AppRegistry.registerComponent('Filmster', () => Filmster);
