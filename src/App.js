import React from 'react';
import './App.css';
import Home from './containers/Home/';
import Header from './components/Header';
import Hero from './components/Hero';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import ContactUS from './containers/ContactUS';
import Post from './containers/Post/index';




class App extends React.Component{
  render()
  {
    return(
      <Router>
      <div className="App"> 
      <Header />
      <Hero />
      <Route path ="/" exact={true} component={Home}/>
      <Route path="/contact-us" component={ContactUS} />
      <Route path="/post" component={Post} />

      </div>
      </Router>
    ) 
  }
}

export default App;