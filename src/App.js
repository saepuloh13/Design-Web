import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import Header from './components/Header';
import Profile from './containers/Profile';
import Home from './containers/Home';
import Portofolio from './containers/Portofolio';
import Contact from './containers/Contact';
import FootText from './components/FootText';


class App extends Component {
  render() {
    return (
      <React.Fragment>

        <Header />
        <Switch>
          <Route path="/home" exact render={props => <Home />} />
          <Route path="/profil" render={props => <Profile />} />
          <Route path="/portofolio" render={props => <Portofolio />} />
          <Route path="/contact" render={props => <Contact />} />
        </Switch>
        <FootText />

      </React.Fragment>
    );
  }
}

export default App;
