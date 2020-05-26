import React from 'react';

class Team extends React.Component{
  


    render(){
        //console.log("this is props", this.props.handleClickTeam)
        return(
            <div onClick={()=> this.props.handleClickTeam(this.props.team)}>
                {/* arrow function  allows you to pass the team to teams.js which the parents of team and that s how the child sends info to parent by this.props.team */}
                
                <ul>
                    <li><span>{this.props.team.name}</span></li>
                </ul>
            </div>
        )
    }
}


// onClick ={() => {this.props.handleClickTeam(this.props.team)}}




export default Team