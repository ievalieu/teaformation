import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
          <main>
            {this.props.children}
          </main>
        <Footer/>
      </div>
    );
  }
}

export default App;
