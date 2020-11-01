import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import Post from './components/Post';

class App extends Component {
  render() {
    return (
      // Router Wrapper
      <BrowserRouter>
        <div className="App">
          <Navbar />
          {/* Route Loaders */}
          {/* Switch will match with only one url */}
          <Switch> 
            <Route exact path="/" component={Home} /> 
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            {/* Route with parameter */}
            <Route path="/:post_id" component={Post} />
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;