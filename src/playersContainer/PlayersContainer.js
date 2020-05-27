import React from 'react'
import SearchBar from './SearchBar'
import CreatePlayerForm from './CreatePlayerForm'
import Players from '../sharedComponentsPlayer/Players'


class PlayerContainer extends React.Component{
    constructor(){
        super()
        this.state={
            // searchInput: '',
            // filteredArr: [],
            showForm: false
        }
    }
    //in order to keep the original we passed from the app shows on the website
    componentDidMount(){
        this.setState({
            filteredArr: this.props.playersArr
        })
    }
//======================================================= controlled search ========================================

    // handleOnChange = (event) => {  //the first function for to set the state for the search input
    //     const input = event.target.value
    //     this.setState({
    //         searchInput: input
    //     })
    //     this.filterPlayersArray()
    // }


    // filterPlayersArray = () => {  //this function is for to set the state for the filtered array of players
    //     const textInput = this.state.searchInput
    //     const playersArray = this.props.playersArr
    //     const players = playersArray.filter(p => p.name.toLowerCase().includes(textInput.toLowerCase()))
    //     this.setState({
    //         filteredArr: players
    //     })
    // }
//===================================================================================================================
    handleClickForm = () => {

        this.setState({
            showForm: !this.state.showForm  // the oposite of the state
        })
    }



//===================================================================================================================
    render(){
        return(
            <div><h1>players container</h1>

            <SearchBar onSearch={this.props.onSearch} input={this.props.input}/>

             <div>
            <button onClick={this.handleClickForm}>{this.state.showForm ? "Hide Form" : "Create a Player"} 
                
            </button>

                 {this.state.showForm ? <CreatePlayerForm  createPlayer={this.props.createPlayer}/>

                 :

                 null
            
            }
             </div>
            

            {/* <CreatePlayerForm  createPlayer={this.props.createPlayer}/> */}


            <Players playersArr = {this.props.playersArr} handleDelete={this.props.handleDelete}/>
            
            
            </div>

        )
    }
}









export default PlayerContainer