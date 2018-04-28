import React from 'react';
import {
  StyleSheet,
  Text,
  TouchableWithoutFeedback,
  View,
  Dimensions
} from 'react-native';
import Box from './box';
import Obstacle from './obstacle';

const screenHeight = Dimensions.get('window').height;
const screenWidth = Dimensions.get('window').width;
const boxHeight = 50;

export default class App extends React.Component {

  constructor(){
    super();
    this.boxInterval = null;
    this.obstacleInterval = null;
    this.obstacleMoveInterval = null;

    this.state = {
      bottom: 0,
      top: screenHeight - boxHeight,
      obstacle: null
    };
  }

  touchHandler = ():void => {
    if (this.state.top < 0){
      this.props.gameOver();
      return;
    }

    this.setState({
      bottom: this.state.bottom + 100,
      top: this.state.top - 100
    });
  }

  componentDidMount(){
    this.boxInterval = setInterval(()=>{
      const {bottom, top} = this.state;
      if (bottom > 0){
        this.setState({
          bottom: bottom - 3,
          top: top + 3
        });
      }
    }, 25);

    this.obstacleMoveInterval = setInterval(()=>{
      const {obstacle} = this.state;
      if (!obstacle) return;

      if (obstacle.left < -100){
        this.setState({obstacle: null});
        return;
      }

      this.setState({ obstacle: {...obstacle, left: obstacle.left - 3}});
    }, 25);

    this.obstacleInterval = setInterval(()=>{
      const {obstacle} = this.state;
      
      if (!obstacle)
        this.setState({obstacle: {
          left: screenWidth,
          height: Math.random() * screenHeight * 0.8
        }});
    }, 1000);
  }

  componentWillUnmount(){
    clearInterval(this.boxInterval);
    clearInterval(this.obstacleInterval);
    clearInterval(this.obstacleMoveInterval);
  }

  render() {
    const { bottom, obstacle } = this.state;

    return (
      <TouchableWithoutFeedback onPress={this.touchHandler}>
        <View style={styles.container}>
          <Box {...{bottom}} />
          {obstacle && <Obstacle {...{...obstacle}}/>}
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