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
import getNews from '../data/getNews';
import Carousel from "react-native-carousel-control";

const MovieNews = React.createClass({

  getInitialState() {
    return ({ news: [] });
  },

  componentDidMount() {
    this.loadNews();
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

  render() {
    return (
      <View>
        <View style={styles.headerContainer}>
          <Text style={styles.header}>Film News</Text>
        </View>
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
  topContainer: {
    flex: 2,
  },
  carouselCard: {
    flex: 1
  }
});

module.exports = MovieNews;