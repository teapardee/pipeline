import React from 'react';

export default class Header extends React.Component {
  render() {
    return (
      <header className="header-maincontainer">
        <div className="header-subcontainer">
          <div className="header-wrapper">
            <a href="http://localhost:3000/" className="parallelogram">
              DUE-DILLY
            </a>
          </div>
          <input
            placeholder="search ticker or company . . ."
            className="search-container"
          ></input>
          <div className="search-img"></div>
        </div>
      </header>
    );
  }
}
