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
      <div className="FinalGame">
         <div className="statusDetail">
              <p>{this.props.statusDetail}</p>
          </div>
          <div className="gameStats">
            <div className="teams">
              <p>{this.props.homeTeam.team.abbreviation}</p>
              <p>{this.props.awayTeam.team.abbreviation}</p>
            </div>
            <div className="scores">
              <p>{this.props.homeTeam.score}</p>
              <p>{this.props.awayTeam.score}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default FinalGame
