import React from 'react';
import '../styles/App.scss';
import JokeApp from '../components/app';

class App extends React.Component {
  state = {
    getFirstJoke: true,
  }

  showFirstJoke = () => {
    this.setState({
      getFirstJoke: !this.state.getFirstJoke,
    });
  };

  render() {
    const { getFirstJoke } = this.state;
    return (
      <div className='App'>
        {
          getFirstJoke ? (
          <>
            <h2>Joke Generator</h2>
            <button className='btn btn-info' onClick={this.showFirstJoke}>
              Get a Joke
            </button>
          </>
          ) : (
            <JokeApp />
          )
        }
      </div>
    );
  }
}

export default App;
