import React, { Component } from 'react';
import { Widget, addResponseMessage, addUserMessage } from 'react-chat-widget';

class CBW extends Component {
   componentDidMount() {
    addResponseMessage("Hello! How may I help you?");
    
  }
  
    handleNewUserMessage = (text) => {
    console.log(`New message incomig! ${text}`);
    
  }
    render() {
    return (
      <div className="CBW">       
        <Widget 
              handleNewUserMessage={this.handleNewUserMessage}
        />
      </div>
      );
  }
}
export default CBW;
