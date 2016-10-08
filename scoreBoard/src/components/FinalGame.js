import React, { Component } from 'react';

class FinalGame extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  handleCilck(){
  }

  render() {

    return (
      <div className="FinalGame col-md-4">
         <div className="row statusDetail">
              <p>{this.props.statusDetail}</p>
          </div>
          <div className="row gameStats">
              <p>{this.props.homeTeam.team.abbreviation}: {this.props.homeTeam.score}</p>
              <p>{this.props.awayTeam.team.abbreviation}: {this.props.awayTeam.score}</p>
          </div>
      </div>
    )
  }
}

export default FinalGame
