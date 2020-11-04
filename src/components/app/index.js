import React, { Component } from 'react';
import jokeData from '../../helpers/data/jokeData';
import Joke from '../setup';

class JokeApp extends Component {
  state = {
    jokes: [],
  }

  componentDidMount() {
    jokeData.getJoke().then((response) => {
      this.setState({
        jokes: response,
      });
    });
  }

  render() {
    const { jokes } = this.state;

    const renderJokeToDom = () => (
     <Joke key={jokes.id} joke={jokes}/>);

    return (
      <div>
        {renderJokeToDom()}
      </div>
    );
  }
}

export default JokeApp;
