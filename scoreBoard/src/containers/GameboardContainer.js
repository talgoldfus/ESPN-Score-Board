import React, { Component } from 'react';
import {connect} from 'react-redux'
import filterEvents from '../actions/filterEvents'
import LiveGame from '../components/LiveGame'


class Gameboard extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  handleCilck(filter){
    this.props.filterEvents(filter)
  }

  render() {
    const {scheduled,live,final} = this.props.display
    var events;
    if(scheduled){
      events =scheduled.map(event => <h1>scheduled event {event.id}</h1>) }
      else{
        events =live.map(event=>{
          let game = event.competitions[0]
          return (
            <LiveGame
              statusDetail={game.status.detail}
              homeTeam={game.competitors[0]}
              awayTeam={game.competitors[1]}
              situation={game.situation}
            />)}).concat(
            final.map(event=> null)
        )
      }

    return (
      <div className="container-fluid mainContainer">
        <div className="row">
          <div className="selectors col-md-2">
            <div>
              <button type="button" className="Today" onClick={()=>this.handleCilck("TODAY")}>
              Today
              </button>
            </div>
            <div>
              <button type="button" className="Scheduled" onClick={()=>this.handleCilck("SCHEDULED")}>
                Scheduled
              </button>
            </div>
          </div>
          <div className="events col-md-10">
              <div className="row">
                {events}
              </div>
          </div>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { display: state.events };
}

export default connect(mapStateToProps,{filterEvents})(Gameboard)
