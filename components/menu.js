import React from 'react';
import {
  View,
  Button,
  StyleSheet
} from 'react-native';

export default class App extends React.Component {

  render() {
    return(
      <View style={styles.menu}>
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