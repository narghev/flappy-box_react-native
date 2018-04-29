import React from 'react';
import {
  View,
  Button,
  StyleSheet,
  Text
} from 'react-native';
import Score from './score';

export default class App extends React.Component {

  render() {
    return(
      <View style={styles.menu}>
        <Score score={this.props.score} />
        <Button title="Play" onPress={this.props.start} style={styles.button} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  menu: {
    height: '100%',
    width: '100%',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    backgroundColor: 'blue',
    fontSize: 40
  }
});