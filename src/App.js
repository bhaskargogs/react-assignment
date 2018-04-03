import React, { Component } from 'react';
import './App.css';
import './UserOutput/UserOutput.css'
import './ValidationComponent/ValidationComponent.css'

import UserInput from './UserInput/UserInput';
import UserOutput from './UserOutput/UserOutput';
import ValidationComponent from './ValidationComponent/ValidationComponent';
import CharComponent from './CharComponent/CharComponent';

class App extends Component {
  state = {
    username: 'junnie',
    value: '',
    chars: []
  }
  changeUsername = (event) => {
    this.setState({username: event.target.value})
  }

  getCount = (event) =>{
    this.setState({value: event.target.value});
    const length = this.state.value.length;
    this.setState({count: length});
    const chars = this.state.value.split('');
    this.setState({chars: chars});
    console.log(this.state.chars);
  }

  render() {
    return (
      <div className="App">
          <h1>Assignment 1</h1>
          <div>
             <input type="text" onChange={this.getCount} value={this.state.value} /> <ValidationComponent count={this.state.count} />
          </div>
          <CharComponent chars = {this.state.chars} />
          <div className="UserOutput">
          <UserInput changeUsername={this.changeUsername} username={this.state.username}/>
          <UserOutput username={this.state.username}> One of the coolest Asian guy that I have met. </UserOutput>
          </div>
      </div>
    );
  }
}

export default App;
