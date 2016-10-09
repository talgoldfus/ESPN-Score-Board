import React, { Component } from 'react';
import Base from './Base'
class LiveGame extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  handleCilck(){
  }

  render() {

    return (
      <div className="LiveGame">
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
            <div className="stats">
              <Base
              outs={this.props.situation.outs}
              first={this.props.situation.onFirst}
              second={this.props.situation.onSecond}
              third={this.props.situation.onThird}
              />
            </div>
          </div>
      </div>
    )
  }
}

export default LiveGame
