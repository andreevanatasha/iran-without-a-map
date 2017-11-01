import React, { Component } from 'react';
import logo from './logo.png';
import cover from './000021590002.jpg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">ИРАН — ЭТО ОХУЕННО</h1>
        </header>
        <p className="App-intro">
          Да, в Иране круто, езжайте. Нет, не страшно. Да, визу можно сделать в аэропорту, а можно заранее в Москве. Да, нужно соблюдать дресс-код, нет, это несложно. Нет, к женщинам очень уважительно относятся. Хотя бы на десять дней. Путеводителю Lonely Planet вполне можно верить. Couchsurfing работает. 
        </p>
        <img src={cover} alt="cover" />
      </div>
    );
  }
}

export default App;
