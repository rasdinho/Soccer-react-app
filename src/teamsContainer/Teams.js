import React from 'react';
import Team from './Team'

class Teams extends React.Component{
   
    render(){
        //console.log("hancleclick", this.props.handleClickTeam)
        return(
            <div>
                <h1>Top 6 Teams in Europe</h1> 
                {/* map returns a new array with the same elements as the original but with set modification */}
                {/* {this.props.teamsArr.map((t, index) => <Team team={t} key={index}/>)} */}
                
                {this.props.teamsArr.map((t) => <Team team={t} key={t.id} handleClickTeam={this.props.handleClickTeam}/>)}



                


             


            </div>
        )
    }
}

export default Teams