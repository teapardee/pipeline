import React from 'react';
import './Header.css';
import './Channels.css';
import './App.css';
import './Sidebar.css';
import './Summary.css';
import Header from './components/Header';
import Sidebar from './components/Sidebar';
import Summary from './components/Summary';
import Channels from './components/Channels';

export default class App extends React.Component {
  render() {
    return (
      <div className="body-grid">
        <Header />
        <Sidebar />
        <Summary />
      </div>
    );
  }
}
