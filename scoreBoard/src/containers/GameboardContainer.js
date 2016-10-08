import React, { Component } from 'react';
import {connect} from 'react-redux'
import filterEvents from '../actions/filterEvents'

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
        events =live.map(event=> <h1>live event {event.id}</h1>).concat(
        final.map(event=> <h1>final event {event.id}</h1>)
        )
      }

    return (
      <div className="mainContainer">
        <div className="row">
          <div className="selectors col-md-1">
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
          <div className="events col-md-11">
            {events}
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
