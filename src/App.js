import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeContainer from './components/HomeContainer'
import AllContainer from './components/AllContainer'
import PlayersContainer from './components/PlayersContainer'

import {
  BrowserRouter as Router, //importing the BrowserRouter as a Router from react-router-dom library
  Switch, //importing the Link Switch and the Route form the library
  Route,
  Link
} from "react-router-dom";

class App extends React.Component{


  render(){
    function Home() {
      return <HomeContainer />;
    }
    
    function Teams() {
      return <AllContainer />
    }
    
    function Players() {
      return <PlayersContainer />;
    }




return (
    <Router>
    <div>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/teams">Teams</Link>
          </li>
          <li>
            <Link to="/players">Players</Link>
          </li>
        </ul>
      </nav>

  {/* A <Switch> looks through its children <Route>s and
      renders the first one that matches the current URL. */}
      <Switch>
        <Route path="/teams">
          <Teams />
        </Route>
        <Route path="/players">
          <Players />
        </Route>
        <Route path="/">
          <Home />
        </Route>
      </Switch>
    </div>
    </Router>

  );
  }
}
export default App;
