import React from "react";
import "./Header.css";
import "./Channels.css";
import Header from "./components/Header";
import Channels from "./components/Channels";

import {BrowserRouter, Route} from "react-router-dom";


export default class App extends React.Component {



  render() {

    return (
      <BrowserRouter>
        
          <Header />
          <Route
                /*component={Channels}
                /*requestType='post'
                cateogryID={null}
                path='/:category?/:subcategory?' */
              />
        
      </BrowserRouter>
    );
  }
}
