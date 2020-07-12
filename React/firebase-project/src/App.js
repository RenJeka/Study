import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import * as firebase from 'firebase'

export default class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    }
  }

  componentDidMount() {
    
    const db = firebase.database();
    console.log(db); 
  }

  handleChange= ({target: {value, id}}) => {
    this.setState({
      [id]: value,
    })
  }

  createAccount = () => {
    alert(111)
  };

  render() {
    return (
      <div>
        <form className="login-block">
          <input 
            type="text" 
            placeholder="email" 
            id="email" 
            onChange={this.handleChange}
          />
          <input 
            type="password" 
            id="password" 
            placeholder="password"
            onSubmit={this.handleChange}
          />
          <input 
            type="submit"
            onClick={this.createAccount}
          />

        </form>
      </div>
    )
  }
}
