import React from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';
import {
  Button
} from 'react-native-elements';
import { Col, Row, Grid } from "react-native-easy-grid";

const Filmster = React.createClass({
  render() {
    return (
      <View style={styles.container}>
        <Grid>
          <Row style={styles.col1}>
            <Text>Hey, from Filmster</Text>
          </Row>
          <Row style={styles.col2}>
            <Text>second col</Text>
            <Button
              raised
              icon={{name: 'cached'}}
              title='RAISED WITH ICON' />
          </Row>
        </Grid>
      </View>
    );
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: '#F5FCFF',
  },
  col1: {
    backgroundColor: 'red',
  },
  col2: {
    backgroundColor: 'orange'
  }
});

AppRegistry.registerComponent('Filmster', () => Filmster);
