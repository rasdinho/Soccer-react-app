import React from 'react'



class Player extends React.Component{
    constructor(){
        super()
        this.state={
            favorite: false
        }
    }



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
                    <button type="button" class="btn btn-primary" data-toggle="button" aria-pressed="false" autocomplete="off"
                       onClick={() => this.setState({favorite: !this.state.favorite})}>{this.state.favorite ? "Liked" : "unliked"}</button>

                       <button type="button" class="btn btn-danger" data-toggle="button" aria-pressed="false" autocomplete="off" onClick={()=> this.props.handleDelete(this.props.player)}>Delete</button>           
             </div>
            
        {/* </div> */}
    </div>


    



</>
        )
    }
}

export default Player