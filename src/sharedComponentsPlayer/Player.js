import React from 'react'



class Player extends React.Component{



    render(){
        //console.log("player", this.props.player)
        const featureObj = this.props.player
        return(

    //     <div><h1> {this.props.player.name} </h1>
    //         <img src={this.props.player.img} alt="..."/>
    //    </div>

<>
    <div className="grid-container">
        {/* <div className="col-sm-6 col-md-4"> */}
            <div className="grid-item" >
                    <img src={this.props.player.img} alt="..." onClick={(event) => this.props.featuredPlayer(event, featureObj)}/>
                    <h3>{this.props.player.name}</h3>                    
             </div>
            
        {/* </div> */}
    </div>


    



</>
        )
    }
}

export default Player