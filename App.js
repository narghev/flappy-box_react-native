import React from 'react';
import {
  Text
} from 'react-native';
import Game from './components/game';
import MainMenu from './components/menu';

export default class App extends React.Component {

  constructor(){
    super();
    this.state = {
      inGame: false
    }
  }

  gameOver = ():void => {
    this.setState({inGame: false});
  }

  start = ():void => {
    this.setState({inGame: true});
  }

  render() {
    const { inGame } = this.state;



    const content = inGame ?
      <Game {...{gameOver: this.gameOver}} /> :
      <MainMenu {...{start: this.start}} />

    return content;
  }
}
