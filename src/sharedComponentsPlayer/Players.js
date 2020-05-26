import React from 'react'
import Player from './Player'

class Players extends React.Component{



    render(){
        console.log("PlayersArr", this.props.playersArr)
        return(
            <div>
            
            {/*  */}
            {this.props.playersArr.map(p =>  <Player player={p} key={p.id} featuredPlayer={this.props.featuredPlayer} />)}
            
            
            
            
            
            
            
            </div>

        )
    }
}




export default Players