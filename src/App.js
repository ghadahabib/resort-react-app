import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';
import './App.css';

import Home from './pages/Home';
import Rooms from './pages/Rooms';
import SingleRoom from './pages/SingleRoom';
import NotFound from './pages/ErrorPage';
import Contact from './pages/Contact';
import Navbar from './components/navbar';
import  Footer from './components/Footer';

class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <Switch>
      <Route exact path='/' component={Home}></Route>
      <Route exact path='/rooms' component={Rooms}></Route>
      <Route exact path='/rooms/:slug' component={SingleRoom}></Route>
      <Route exact path='/contact' component={Contact}></Route>
      <Route component={NotFound}></Route>
      </Switch>
      <Footer/>
      </>
    )
  }
}
export default App;
