import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Collapsible from 'react-collapsible';
import Home from './components/Home';
import About from './components/About';
import Contact from './components/Contact';
import WorkExperience from './components/WorkExperience';
import Projects from './components/Projects';
import Error from './components/Error';
import Navigation from './components/Navigation';

class App extends Component {
  render() {
    return (
       <BrowserRouter>
        <div>
          <Navigation />
            <Switch>
             <Route path="/" component={Home} exact/>
             <Route path="/about" component={About}/>
             <Route path="/contact" component={Contact}/>
             <Route path="/projects" component={Projects}/>
             <Route path="/workExperience" component={WorkExperience}/>
            <Route component={Error}/>
           </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
