import React from 'react'



class Player extends React.Component{
    constructor(){
        super()
        this.state = {
            liked: false
        }
    }

// =====================================================================================
// handleLike = () => {
//     const op = !this.state.liked
//     this.setState({
//         liked: op
//     })

// }
handleLike = () => {
    const id = this.props.player.id 
    const op =  !this.state.liked
    const player = {
        liked: op
    }
   
    fetch(`http://localhost:3000/players/${id}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(player)
    })
    .then(resp => resp.json())
    .then(player => this.setState({
        liked: player.liked
    }))
}

//===============================

    render(){
        console.log("player", this.props.player)
        //console.log("players", this.props.handleLike)

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

                    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                    
                      onClick={this.handleLike}> {this.state.liked ? "true" : "false"}</button>

                       <button type="button" class="btn btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={()=> this.props.handleDelete(this.props.player)}>Delete</button>           
             </div>
            
        {/* </div> */}
    </div>


    



</>
        )
    }
}

export default Player