import React from 'react';
import { View, StyleSheet } from 'react-native';

export default
class Box extends React.Component {
  render(){
    const {bottom, left} = this.props;

    return(
      <View style={[style.box, {left, bottom}]}/>
    );
  }
}

const style = StyleSheet.create({
  box: {
    width: 100,
    height: 100,
    backgroundColor: '#ff0000',
    position: 'absolute'
  }
});