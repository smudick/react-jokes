import React, { Component } from 'react';
import getJokes from '../../helpers/data/jokeData';
import Setup from '../setup';

class JokeApp extends Component {
  state = {
    joke: [],
  };

  getAJoke = () => {
    getJokes().then((response) => {
      this.setState({
        joke: response,
      });
    });
  };

  render() {
    const { joke } = this.state;
    const setup = () => <Setup key={joke.id} joke={joke} />;
    return (
      <>
        <button type='button' className='btn btn-info' onClick={this.getAJoke}>
          Get a Joke
        </button>
        {this.state.joke.id ? (<div>{setup()}</div>) : <></>}
      </>
    );
  }
}

export default JokeApp;
