import React from 'react';
import '../styles/App.scss';
import JokeApp from '../components/app/index';

class App extends React.Component {
  render() {
    return (
      <div className='App'>
        <img
          src={
            'https://user-images.githubusercontent.com/29741570/98047811-372e3b80-1df2-11eb-9bb6-3e8845e92d9e.png'
          }
          alt='joke logo'
          className='logo'
        ></img>
        <JokeApp />
      </div>
    );
  }
}

export default App;
