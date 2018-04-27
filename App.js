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
    this.interval = null;
    this.state = {
      bottom: 0
    };
  }

  touchHandler = ():void => {
    this.setState({bottom: this.state.bottom + 100});
  }

  componentDidMount(){
    this.interval = setInterval(()=>{
      if (this.state.bottom > 0)
        this.setState({bottom: this.state.bottom-3});
    }, 25);
  }

  componentWillUnmount(){
    clearInterval(this.interval);
  }

  render() {
    const { bottom } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.touchHandler}>
        <View style={styles.container}>
          <Box {...{bottom}} />
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
