import React, { Component } from 'react';
import Chatkit from '@pusher/chatkit-client';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import SendMessageForm from './SendMessage';
import ChatList from './ChatList';
import {
  getRooms,
  saveMessage,
} from '../../state/actions/chatActions';

const StyledChatScreen = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;

  .chat-container {
    display: flex;
    flex: 1;
    width: 100%;
  }

  .whos-online-list-container {
    width: 300px;
    flex: none;
    padding: 20;
    background-color: #2c303b;
    color: white;
  }

  .chat-list-container {
    padding: 20;
    width: 100%;
    display: flex;
    flex-direction: column;
  }
`;
class ChatScreen extends React.Component {
  state = {
    currentUser: {},
    currentRoom: {},
    messages: [],
  };

  componentDidMount = () => {
    this.props.getRooms(this.props.user.email);

    if (this.props.roomId) this.startChat(this.props.roomId);
  };

  startChat = roomId => {
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74',
      userId: this.props.user.email,
      tokenProvider: new Chatkit.TokenProvider({
        url: 'http://localhost:5000/chat/auth',
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
        debugger;
        this.setState({ currentUser });
        return currentUser.subscribeToRoom({
          roomId,
          messageLimit: 100,
          hooks: {
            onMessage: message => {
              this.setState({
                messages: [...this.state.messages, message],
              });
            },
          },
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => console.error('error', error));
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    });
  };
  render() {
    return (
      <StyledChatScreen>
        <div className='chat-container'>
          <aside className='whos-online-list-container'>
            <h2>Your Chats</h2>
            <ChatList
              rooms={this.props.rooms}
              user={this.props.user}
            />
          </aside>
          <section className='chat-list-container'>
            <MessageList
              messages={this.state.messages}
              joinChat={this.startChat}
            />
            <SendMessageForm onSubmit={this.sendMessage} />
          </section>
        </div>
      </StyledChatScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.chatReducer.roomId,
    messages: state.chatReducer.messages,
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
  };
};

export default connect(mapStateToProps, { getRooms, saveMessage })(
  ChatScreen,
);
