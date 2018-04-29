import React from 'react';
import {Text, View, StyleSheet} from 'react-native';

export default
class Score extends React.Component {
  render(){
    return(
      <View style={styles.view}>
        <Text style={styles.score}>{this.props.score}</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  score: {
    fontSize: 100,
    color: '#212121'
  },
  view: {
    position: 'absolute',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    top: 100,
    zIndex: 1
  }
});