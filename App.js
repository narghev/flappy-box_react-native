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
      inGame: false,
      score: 0
    }
  }

  gameOver = () => {
    this.setState({inGame: false});
  }

  start = () => {
    this.setState({inGame: true, score: 0});
  }

  increaseScore = () => {
    this.setState({score: this.state.score + 1});
  }

  render() {
    const { inGame, score } = this.state;

    const content = inGame ?
      <Game {...{gameOver: this.gameOver, score, increaseScore: this.increaseScore}} /> :
      <MainMenu {...{start: this.start, score}} />

    return content;
  }
}
