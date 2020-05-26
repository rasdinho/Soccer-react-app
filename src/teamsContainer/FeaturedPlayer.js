import React from 'react';

class FeaturedPlayer extends React.Component{


    render(){
        //console.log("hit it", this.props.featuredPlayer)
        return(
        <>
            

            {this.props.featuredPlayer ?   

                    <div class="container" >
                            <div className="card" style={{width:"400px"}}>
                                <img className="card-img-top" src={this.props.featuredPlayer.img} alt="." style={{width:"100%"}}/>
                                <div className="card-body">
                                <h4 className="card-title">Name: {this.props.featuredPlayer.name}</h4>
                                <h4 className="card-title">Age: {this.props.featuredPlayer.age}</h4>
                                <h4 className="card-title">Jersey Number: {this.props.featuredPlayer.jersey_num}</h4>
                                <h4 className="card-title">Position: {this.props.featuredPlayer.position}</h4>
                                
                                
                                
                                </div>
                            </div>
                    </div>
                :

                null
            }








          
     </>
        )
    }
}

export default FeaturedPlayer