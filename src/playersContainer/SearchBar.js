import React from 'react'


class SearchBar extends React.Component{



    render(){
        return(
            <div className="main">
                <div className="form-group has-search">
                <span className="fa fa-search form-control-feedback"></span>
                {/* <input type="text" class="form-control" placeholder="Search" onChange={this.props.handleOnChange}/> */}

                <input type="text" class="form-control" placeholder="Search" value={this.props.input} onChange={(event)=> this.props.onSearch(event)}/>
                
                </div>
            </div>
        )
    }
}









export default SearchBar