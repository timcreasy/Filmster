import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';
import {Card, CardItem, Thumbnail } from 'native-base';
import moment from 'moment';

const MovieDetailView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <Card>
          {
            this.props.movie.showtimes.map((showing, index) => {

              let showtime = moment(showing.dateTime).format("MMMM Do - h:mm a");

              return (
                <CardItem key={index}>
                  <Text>{showing.theatre.name}</Text>
                  <Text>{showtime}</Text>
                </CardItem>
              )
            })
          }
        </Card>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 65
  }
});

module.exports = MovieDetailView;