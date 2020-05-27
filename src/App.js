import React from 'react';
// import logo from './logo.svg';
import './App.css';
import HomeContainer from './HomeContainer'
import AllContainer from './teamsContainer/AllContainer'
import PlayersContainer from './playersContainer/PlayersContainer'

import {
  BrowserRouter as Router,
  Switch, //importing the Link Switch and the Route form the library
  Route
} from "react-router-dom";

class App extends React.Component{
  constructor(props){
    //console.log("Constructor")
    super(props)
    this.state = {
      allPlayers: [],
      searchInput: '',  //for this app search
      //likeClick: false
    }
  }

  componentDidMount(){
    //console.log("CDMount")
    fetch("http://localhost:3000/players")
    .then(resp => resp.json())
    .then(data => {
      this.setState({
        allPlayers: data,
        searchPlayer: data // we put the line after we made the search work/ so it will update everytime we delete a letter in the search input

      })
    })
      
  }
// ========================================== search bar ========================================

    onSearch =(event) => {
      this.setState({
        searchInput: event.target.value
      })
      this.filterSearch()
    }
    filterSearch = () => {
      const playerArr = this.state.allPlayers
      const player = playerArr.filter(p => p.name.toLowerCase().includes(this.state.searchInput.toLowerCase()))
      return player
    }
//==================================================create new player==========================================

    createPlayer = (event, playerObj) => {
      event.preventDefault()
      //console.log("new player", playerObj)
      const playerUrl = "http://localhost:3000/players"

      fetch(playerUrl ,{
        method: 'POST',
        headers: {"Content-Type":"application/json",
                  'Accept': 'application/json'
      },
        body: JSON.stringify(playerObj) //I am passing the obj i got from the createPlayerForm and got it as playerObj
      })
      .then(resp => resp.json())
      .then(player => {
       // console.log("new player", player)
        this.setState({
          allPlayers: [...this.state.allPlayers, player],
          searchPlayer: [...this.state.searchPlayer, player] //cuz the search player is the one that s rendering to the screen
        })
      })
      event.target.reset()
    }

//==================================================================Delete==========================

    handleDelete = (playerObj) =>{
      console.log("player", playerObj)

      const newArr = this.state.allPlayers.filter(player => player.id !== playerObj.id)
      const id = playerObj.id

      fetch(`http://localhost:3000/players/${id}`, {
        method: 'DELETE',
        headers: {"Content-Type":"application/json",
        'Accept': 'application/json'
      }

      })
      this.setState({
        allPlayers: newArr,
        searchPlayer: newArr
      })

      // .then( this.setState({
      //   allPlayers: newArr
      // })
      //   )
    }

// ========================================== == ========================================
  // handleLike = (event, featureObj) => {

    
  //   const id = featureObj.id
  //   //debugger


  //   fetch(`http://localhost:3000/players/${id}`,{
  //     method: 'PATCH',
  //     headers: {"Content-Type":"application/json",
  //       'Accept': 'application/json'
  //     },
  //     body: JSON.stringify({likeClick: !featureObj.liked})
  //   })
  //   .then(resp => resp.json())
  //   .then(data => console.log(data))
  // }
// ====================================================================================

  render(){
    //console.log("render")


    return (
      <Router>
        <div>
          <nav>
           
                  <ul className="topnav">
                    <li className="bottomnav">
                      <a className="active" href="/home">Home</a>
                    </li>

                    <li className="bottomnav">
                      <a href="/teams">Teams</a>
                    </li>

                    <li className="bottomnav">
                      <a href="/players">Players</a>
                    </li>
                  </ul>
                 
               
          </nav>
{/* ================================================================= */}
      
{/* ===================================================================== */}
    {/* A <Switch> looks through its children <Route>s and
        renders the first one that matches the current URL. */}
        <Switch>

          <Route exact path="/teams" render={() => <AllContainer handleDelete={this.handleDelete}/>}/>
      
          <Route exact path="/players" render={() => <PlayersContainer playersArr = {this.filterSearch()} input={this.state.searchInput} onSearch={this.onSearch}  createPlayer={this.createPlayer}  handleDelete={this.handleDelete} />}/>
        
          <Route exact path="/home" component={HomeContainer}/>
        
        </Switch>
      </div>
      </Router>
    );
  }
}
export default App;
