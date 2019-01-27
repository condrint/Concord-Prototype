import React, { Component } from 'react';

class Popup extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="popups">
        {this.props.type == 'New friend' &&
          <div id="newFriendPopup">
            Add a new friend by username
            <form id="newFriendForm">
              <input id="newFriendInput" type="text" onChange={this.props.change} value={this.props.newFriendInput}/>
              <button type="submit" onClick={this.props.newFriendSubmit}>Add</button>
            </form>
          </div>
        }
        {/*
        {this.props.type == 'New Server' &&
          <div id="newServerPopup">
            Join or create server
            <form id="newServerForm">
              <input id="createServerInput" type="text" onChange={this.props.change} value={this.props.serverInput}/>
              <button type="submit" onClick={this.props.createServerSubmit}>Create</button>
              <button type="submit" onClick={this.props.joinServerSubmit}>Join</button>
            </form>
          </div>
        }*/}
      </div>
    )
  }
}

export default Popup;
