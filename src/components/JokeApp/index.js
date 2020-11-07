import React, { Component } from 'react';
import getAJoke from '../../helpers/data/jokeData';
import Setup from '../Setup';
import Punchline from '../Punchline';

class JokeApp extends Component {
  state = {
    joke: [],
    showSetup: false,
    showPunchline: false,
  };

  getAJoke = () => {
    getAJoke().then((response) => {
      this.setState({
        joke: response,
        showSetup: true,
        showPunchline: false,
      });
    });
  };

  showSetup = () => {
    this.setState({
      showSetup: !this.state.showSetup,
    });
  };

  showPunchline = () => {
    this.setState({
      showPunchline: !this.state.showPunchline,
    });
  };

  render() {
    return (
      <>
        <button
          href='#'
          className='punchline-button'
          id='punchline'
          onClick={this.getAJoke}
        >
          Get New Joke
        </button>
        {this.state.showSetup ? (
          <>
            <Setup setup={this.state.joke.setup} />
            <button
              href='#'
              className='punchline-button'
              id='punchline'
              onClick={this.showPunchline}
            >
              Show punchline
            </button>
          </>
        ) : (
          <></>
        )}

        {this.state.showPunchline ? (
          <>
            <Punchline punchline={this.state.joke.punchline} />
            {/* <button
              href='#'
              className='punchline-button'
              id='punchline'
              onClick={this.showSetup}
            >
              Get New Joke
            </button> */}
          </>
        ) : (
          <></>
        )}
      </>
    );
  }
}

export default JokeApp;
