import './App.css';
import React from 'react';
import { Route, Switch } from "react-router-dom";
import About from './components/sites/About';
import Home from './components/sites/Home';
import Alljobs from './components/sites/Alljobs';

import Navbar from './components/headerComponent/Navbar.js';
import Footer from './components/footerComponent/Footer.js';

class App extends React.Component {
  render() {
      return (
        <div className="App">
        <Navbar />
            <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/about">
              <About />
            </Route>
            <Route path="/Alljobs">
              <Alljobs />
            </Route>
          </Switch>
          <Footer />
          </div>
            );
  }
}

export default App;
