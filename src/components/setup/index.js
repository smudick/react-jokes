import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Joke extends Component {
  // static propTypes = {
  //   joke: jokeShape,
  //   showPunchline: PropTypes.func,
  // };

state = {
  jokeShown: true,
}

showPunchline = () => {
  this.setState({
    jokeShown: !this.state.jokeShown,
  });
};

render() {
  const { joke, showPunchline } = this.props;
  const { jokeShown } = this.state;
  return (
      <div className='joke-view'>
        <div className='Joke setup'>{joke.setup}</div>
        <div className='button'>
          {
            jokeShown ? (
          <button className='btn btn-primary' onClick={this.showPunchline}>
            Show Punchline
          </button>
            ) : (
              <>
              <div className='punchline' onClick={this.showPunchline}>{joke.punchline}</div>
              <button className='btn btn-primary' onClick={this.showPunchline}>Get a new Joke</button>
              </>
            )
          }
        </div>
      </div>
  );
}
}

export default Joke;
