import React, { Component } from 'react';

class LiveGame extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
    this.calculateBase = this.calculateBase.bind(this)

  }

  handleCilck(){
  }

  calculateBase(){
    const {onFirst,onSecond,onThird}= this.props.situation
    let occupiedBase = []
    onFirst ==false ? occupiedBase.push("First") : null
    onSecond ==false ? occupiedBase.push("Second") : null
    onThird ==false ? occupiedBase.push("Third") : null
    return occupiedBase.join(",")
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
              <p>Base: {this.calculateBase()}</p>
              <p>{this.props.situation.outs} Outs</p>
            </div>
          </div>
      </div>
    )
  }
}

export default LiveGame
