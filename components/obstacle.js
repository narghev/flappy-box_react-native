import React from 'react';
import {
  View,
  StyleSheet
} from 'react-native';

export default
class Obstacle extends React.Component {
  render() {
    const {left, height} = this.props;
    return(
      <View style={[styles.obstacle, {height, left}]} />
    );
  }
}

const styles = StyleSheet.create({
  obstacle: {
    backgroundColor: '#3E2723',
    position: 'absolute',
    width: 100,
    bottom: 0
  }
});