import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View
} from 'react-native';
import Box from './components/box';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      boxPosition: {
        bottom: 0,
        left: 0
      }
    };
  }

  render() {
    return (
      <TouchableWithoutFeedback onPress={()=>{console.log('touch')}}>
        <View style={styles.container}>
          <Box {...{...this.state.boxPosition}} />
        </View>
      </TouchableWithoutFeedback>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '100%'
  },
});
