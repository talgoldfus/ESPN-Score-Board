import React from 'react';

const ConversationLink = (props)=> {
    debugger
    return (
      <div className="ConversationLink">
        <a href={props.link.href}>
          <p>Conversation</p>
        </a>
      </div>
    );
}

export default ConversationLink;
