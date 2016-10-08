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
      <div className="LiveGame col-md-4">
         <div className="row statusDetail">
            <div className="col-md-12">
              <p>{this.props.statusDetail}</p>
            </div>
          </div>
          <div className="row gameStats">
            <div className="col-md-6 teams">
              <p>{this.props.homeTeam.team.abbreviation}: {this.props.homeTeam.score}</p>
              <p>{this.props.awayTeam.team.abbreviation}: {this.props.awayTeam.score}</p>
            </div>
            <div className="col-md-6 stats">
              <p>Base: {this.calculateBase()}</p>
              <p>Outs: {this.props.situation.outs}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default LiveGame
