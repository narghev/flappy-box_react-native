import React from 'react';
import {
  Text
} from 'react-native';
import Game from './components/game';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      inGame: true
    }
  }

  gameOver = ():void => {
    this.setState({inGame: false});
  }

  render() {
    const { inGame } = this.state;

    const content = inGame ? <Game {...{gameOver: this.gameOver}} /> :
      <Text style={{color: 'blue', fontSize: 30}}>Dead</Text>

    return content;
  }
}
