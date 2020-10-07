import React from 'react';

export default class Summary extends React.Component {
  render() {
    return (
      <div className="summary-maincontainer">
        <div className="title-container">
          <div className="logo"></div>
          <div className="titlebox">TESLA, INC. [$TSLA]</div>
        </div>
        <div className="boxes"></div>
        <div className="boxes"></div>
      </div>
    );
  }
}
