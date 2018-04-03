import React, { Component } from 'react';
import Main from './components/main';
import Login from './login/login';
import './App.css';
import ui from './action/pc';
import backImage from './image/bg-img.jpg';

class App extends Component {
  componentWillMount() {
    // this.context.router.push('/');
    if (window.localStorage.getItem('desktopNotification') === 'false') {
      ui.closeDesktopNotification();
    }
  }
  render() {
    const width = window.screen.width;
    const height = window.screen.height;
    return (
      <div className="App">
        <div
          className="background"
          style={{backgroundSize: `${width}px ${height - 50}px`, backgroundImage: `url(${backImage})`}}
        >
          111
        </div>
        <Main />
      </div>
    );
  }
}

export default App;
