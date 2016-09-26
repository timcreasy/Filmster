import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView
} from 'react-native';
// import {
//   Card,
//   ListItem
// } from 'react-native-elements';
import {
  Card,
  CardImage,
  CardTitle,
  CardContent,
  CardAction
} from 'react-native-card-view';
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




             /*   <Card>
                  <CardImage>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{uri: 'https://getmdl.io/assets/demos/image_card.jpg'}}
                    />
                  </CardImage>
                  <CardTitle>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>This is a somewhat long title, I wonder what happens if I keep typing and typing and typing?</Text>
                    </View>
                  </CardTitle>
                  <CardContent>
                    <Text>Content</Text>
                    <Text>Content</Text>
                    <Text>Content</Text>
                    <Text>Content</Text>
                    <Text>Content</Text>
                    <Text>Content</Text>
                  </CardContent>
                  <CardAction separator>
                    <Text>More Content</Text>
                  </CardAction>
                </Card>
*/


              /*  <Card style={styles.carouselCard}
                  key={index}
                  >
                  <View style={styles.textContainer}>
                    <ListItem
                      title={article.name}
                      avatar={{uri: articleImage}} />
                  </View>
                  <ScrollView>
                    <Text>{article.description}</Text>
                  </ScrollView>
                </Card>

                */

  render() {

    const cardTitle = {cardTitle: {padding: 0, paddingLeft: 3, paddingRight: 3}}

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

                <Card key={index} style={styles.carouselCard}>
                  <CardImage>
                    <Image
                      style={{width: 50, height: 50}}
                      source={{uri: articleImage}}
                    />
                  </CardImage>
                  <CardTitle styles={cardTitle}>
                    <View style={styles.textContainer}>
                      <Text style={styles.title}>{article.name}</Text>
                    </View>
                  </CardTitle>
                  <CardContent separator>
                    <Text>{article.description}</Text>
                  </CardContent>
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
  },
  textContainer: {
    flex: 1
  },
  title: {
    fontSize: 15,
    backgroundColor: 'transparent'
  }
});

module.exports = MovieNews;