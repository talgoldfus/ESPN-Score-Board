import React, { Component } from 'react';
import moment from 'moment'
class ScheduledGame extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  handleCilck(){
  }

  render() {
    const gameDate = moment(this.props.statusDetail).format('ddd - LT')

    return (
      <div className="ScheduledGame">
         <div className="statusDetail">
              <p>{gameDate}</p>
          </div>
          <div className="gameStats">
            <div className="teams">
              <p>{this.props.homeTeam.team.abbreviation}</p>
              <p>{this.props.awayTeam.team.abbreviation}</p>
            </div>
            <div className="scores">
              <p>{this.props.homeTeam.team.record.summary}</p>
              <p>{this.props.awayTeam.team.record.summary}</p>
            </div>
          </div>
      </div>
    )
  }
}

export default ScheduledGame




// <div className="ScheduledGame col-md-4">
//    <div className="row statusDetail">
//         <p>{this.props.statusDetail}</p>
//     </div>
//     <div className="row gameStats">
//         <p>{this.props.homeTeam.team.abbreviation}: {this.props.homeTeam.team.record.summary}</p>
//         <p>{this.props.awayTeam.team.abbreviation}: {this.props.awayTeam.team.record.summary}</p>
//     </div>
// </div>
