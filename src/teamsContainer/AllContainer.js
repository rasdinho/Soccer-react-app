import React from 'react'
import Teams from './Teams'
import FeaturedPlayer from './FeaturedPlayer'
import Players from '../sharedComponentsPlayer/Players'


class AllContainer extends React.Component{

    constructor(){
    //console.log("constructor")
        super()
        this.state={      //intiale state
            allTeams: [],
            clickedTeam: [], //for each team we filtyer an array by clicking
            featuredPlayer: null //this is for to feature player
        }
    }
    componentDidMount(){ // constructor/render/componentDidMount are life cycle methods(coDidM will run after the render consolelog constructor didMoun render)
    //console.log("mount")
        fetch("http://localhost:3000/teams")
        .then(resp => resp.json())
        .then(data => {
            this.setState({
                allTeams: data
            })
        })
    }

    // ============================ featured player =================================================

        featuredPlayer = (event, featureObj) => {
            console.log("plyers", featureObj)


            this.setState({
                featuredPlayer: featureObj //this featureObj coming from player component(ur state now is featuredPlayer)
            })

        }

    // ==============================================================================================
            
   

    handleClickTeam = (team) => { // i have a team obj that received for click event from team.js
        //console.log("team is clicke", team)  // we need to set the state whick is an array and send it to players so there we map and render in player
        
        this.setState({
            clickedTeam: team.players
        })


    
    }

    render(){
        //console.log("render")

        return(
            <div>
            
                <FeaturedPlayer featuredPlayer={this.state.featuredPlayer}/>


                <Teams teamsArr={this.state.allTeams} handleClickTeam={this.handleClickTeam}/>

                {/* this is the array u updated at the handle method so u can pass it to players and map there */}
                <Players playersArr ={this.state.clickedTeam} featuredPlayer={this.featuredPlayer}  handleDelete={this.props.handleDelete}/>  
            </div>
        )
    }
}









export default AllContainer