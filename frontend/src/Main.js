import React, { Component } from 'react';
import { Friends } from './Friends.js';
import { Servers } from './Servers.js';
import { NewFriend } from './NewFriend.js';
import { CreateJoinServer } from './NewServer';
import { Messages } from './Messages.js';
import { Settings } from './Settings.js';


class Main extends Component {
  constructor(props) {
    super(props);
  }


  componentDidMount(){
    this.props.getFriends();
    //this.props.getServers();
  }


  render() {
    let urlType = this.props.match.params.type;
    let urlMessageId = this.props.match.params.id;

    return (
      <div id="main">
        <div>
          Settings
          <button onClick={() => this.props.redirect('settings', 'me')}> Settings </button>
        </div>
        <div id = "scalablemain">
          <div class="servers">
            servers
          </div>

        <div id="servers">
          servers
          <Servers servers={this.props.servers} redirect={this.props.redirect}/>
          <CreateJoinServer showServerPopup ={this.props.showServerPopup}/>
        </div>

        <div id="friends">
          Friends
          <Friends friends={this.props.friends} redirect={this.props.redirect}/> 
          <NewFriend showNewFriendPopup={this.props.showNewFriendPopup}/>
        </div>

        <div id="dashboard">

          {(urlType == 'settings') && 
            <div id="settings">
              <Settings handleImageChange={this.props.handleImageChange} uploadImage={this.props.uploadImage} image={this.props.image}/>
            </div>
          }

          {/* don't add html below the sendMessageForm - this comment 
            can be removed when this fact is more obvious in the future*/}

          {(urlType == 'user' || urlType == 'server') && 
            <div id="chat">
              <Messages messages={this.props.messages}/>
              <div id="sendMessageForm">
                <input id="sendMessageInput" onChange={this.props.change} value={this.props.sendMessageInput} type="text" placeholder="Send a message!"/>
                <button onClick={() => this.props.sendMessage(urlType, urlMessageId)}> Send </button>
                {(urlType == 'user' &&
                  <button onClick={() => this.props.callUser(urlMessageId)}> Call </button>
            )}
              </div>
            </div>
          }
          </div>
        </div>
      </div>
    )
  }
}


export default Main;