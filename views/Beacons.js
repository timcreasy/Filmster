import React from 'react';
import {
  StyleSheet,
  View,
  Text
} from 'react-native';

const Beacons = React.createClass({

  render() {
    return (
      <View style={styles.container}>
        <Text>Beacon Page</Text>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    paddingTop: 30,
    flex: 1,
  }
});

module.exports = Beacons;