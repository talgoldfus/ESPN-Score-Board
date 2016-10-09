import React, { Component } from 'react';

class FinalGame extends Component {

  constructor(props){
    super(props)
    this.state ={hover:false}
    this.handleHover = this.handleHover.bind(this)
  }

  handleHover(){
    this.setState({hover: !this.state.hover})
  }

  render() {
    const summary = <h1>TEST</h1>
    const details =
    (<div>
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
     </div>)

    return (
      <div className="FinalGame" onMouseEnter={()=>this.handleHover()} onMouseLeave={()=>this.handleHover()}>
         {this.state.hover ? summary : details}
      </div>
    )
  }
}

export default FinalGame
