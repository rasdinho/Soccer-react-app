import React from 'react'


class CreatePlayerForm extends React.Component{
  constructor(){
    super()
    this.state={
      name: '',
      jersey_num: 1,
      age: 17,
      position: "GK",
      img: '',
      team: 'Barcelona'


    }
  }

  handleForm = (event) => {
    this.setState({
      [event.target.name] : event.target.value
    })
   
  }

    render(){
      const playerObj = this.state
        return(
            <div class="container-player">
            <h2>Create Player :</h2>
            <form action="/action_page.php" class="was-validated" onSubmit={(event) => this.props.createPlayer(event, playerObj)}>
{/* ================================================= */}
              <div class="form-group">
                <label for="uname">Full Name:</label>
                <input type="text" class="form-control" id="uname" placeholder="Enter Full Name" name="name" value={this.state.name} onChange={this.handleForm} required/>
              </div>
{/* ================================================= */}              
              <div class="form-group">
                <label for="pwd">Jersey Number:</label>
                <input type="number" class="form-control"  min="1" id="number" placeholder="Jersey Number" name="jersey_num" value={this.state.jersey_num} onChange={this.handleForm} required/>
              </div>
{/* ================================================= */}              
              <div class="form-group">
                <label for="uname">Age:</label>
                <input type="number"  min="17" class="form-control" id="uname" placeholder="age" name="age" value={this.state.age} onChange={this.handleForm} required/>
              </div>
{/* ================================================= */}
              <div class="form-group">
                <label for="uname">Position:</label>
                         
                <select class="form-control" id="sel1" value={this.state.position} name="position" onChange={this.handleForm} >
                    <option disabled selected value> -- select an option -- </option>
                    <option>GK</option>
                    <option>DF</option>
                    <option>MD</option>
                    <option>FW</option>
                </select>
              </div>
{/* ================================================= */}
              <div class="form-group">
                <label for="uname">Image:</label>
                <input type="text" class="form-control" alt="." id="image" placeholder="Enter image url" name="img" value={this.state.img} onChange={this.handleForm} required/>
              </div>
{/* ==================================================== */}
               <div class="form-group">
                  <label for="uname">Team:</label>
                                        
                    <select className="form-control" id="sel1" value={this.state.team} name="team" onChange={this.handleForm}>
                        <option disabled selected value> -- select an option -- </option>
                         <option>Barcelona</option>
                         <option>Madrid</option>
                         <option>Liverpool</option>
                         <option>Manchester City</option>
                         <option>Bayern</option>
                        
                     </select>
                </div>


              <button type="submit" class="btn btn-primary">Submit</button>
            </form>
          </div>
        )
    }
}









export default CreatePlayerForm