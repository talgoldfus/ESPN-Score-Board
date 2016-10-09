import React, { Component } from 'react';
import {connect} from 'react-redux'
import { browserHistory } from 'react-router'
import getFinalGame from '../actions/getFinalGame'
import FullFinalGame from '../components/FullFinalGame'

class FullFinalGameContainer extends Component {

  constructor(props){
    super(props)
    this.handleCilck = this.handleCilck.bind(this)
  }

  componentWillMount(){
    this.props.getFinalGame(this.props.params.id)
  }

  handleCilck(){
    browserHistory.push("/")
  }

  render() {
    const game = this.props.details.event.competitions[0]

    return (
      <div className="mainContainer">
          <span className="selectors">
            <div>
              <button type="button" className="close" onClick={()=>this.handleCilck()}>
              All Games
              </button>
            </div>
          </span>
          <span className="events">
                <FullFinalGame
                  statusDetail={game.status.detail}
                  homeTeam={game.competitors[0]}
                  awayTeam={game.competitors[1]}
                  situation={game.situation}
                  stats={game.stats}
                />
          </span>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { details: state.fullDetails };
}

export default connect(mapStateToProps,{getFinalGame})(FullFinalGameContainer)
