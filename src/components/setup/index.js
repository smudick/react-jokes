import React, { Component } from 'react';

class Setup extends Component {
  state = {
    setup: [],
  };

  punchline = () => {
    this.setState({
      punchline: this.props.joke.punchline,
    });
  };

  render() {
    const { joke } = this.props;

    return (
      <div className='joke-view'>
        <div className='Joke setup'>{joke.setup}</div>
        <button
          href='#'
          className='punchline-button'
          id='punchline'
          onClick={this.punchline}
        >
          Show punchline
        </button>
        <div id='punchline-section'>
          <h3>{this.state.punchline}</h3>
        </div>
      </div>
    );
  }
}

export default Setup;
