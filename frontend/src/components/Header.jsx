import React from "react";

export default class Header extends React.Component {
  render() {
    return (
      <div className='body'>
        <header className='header-wrapper'> 
        <div className='header-box'></div>
            <div className='header_container'>
              <a href='http://localhost:3000/' className='parallelogram'>
                DUE-DILLY
              </a>
            </div>
        <input placeholder="search ticker" className='sub_header'></input>
        </header>
      </div>
    );
  }
}
