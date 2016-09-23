import React from 'react';
import {
  StyleSheet,
  Text,
  View
} from 'react-native';

const MovieDetailView = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <Text>MovieDetailView</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1
  }
});

module.exports = MovieDetailView;