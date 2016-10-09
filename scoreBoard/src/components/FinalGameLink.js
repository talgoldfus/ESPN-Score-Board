import React from 'react';
import {Link} from 'react-router'

const FinalGameLink = (props)=> {
    return (
      <div className="FinalGameLink">
        <div className="recap">
          <a href={props.link.href}>
            <p>Recap</p>
          </a>
        </div>
        <div className="fullFinalGameLink">
          <Link to={`final/${props.gameID}`}>
            <p>More Details</p>
          </Link>
        </div>
      </div>
    );
}

export default FinalGameLink;
