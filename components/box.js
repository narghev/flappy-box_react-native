import React from 'react';
import { View, StyleSheet } from 'react-native';

export default
class Box extends React.Component {
  render(){
    const {bottom} = this.props;

    return(
      <View style={[style.box, {bottom}]}/>
    );
  }
}

const style = StyleSheet.create({
  box: {
    width: 50,
    height: 50,
    backgroundColor: '#b71c1c',
    position: 'absolute',
    left: 100
  }
});