import React from 'react';
import Chatkit from '@pusher/chatkit-client';
import styled from 'styled-components';
import { connect } from 'react-redux';
import MessageList from './MessageList';
import SendMessageForm from './SendMessage';
import UserList from './UserList';
import { getRooms } from '../../state/actions/chatActions';
import TypingIndicator from './TypingIndicator';
import devices from '../../utils/devices';

const StyledChatScreen = styled.div`
  height: 43.2rem;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 4rem;

  @media ${devices.tablet} {
    width: 95%;
    margin: 0 auto;
  }
  @media ${devices.mobile} {
    width: 90%;
    margin: 0 auto;
  }
  .whos-online-list-container {
    border: 1px solid #ced4da;
    border-bottom-left-radius: 6px;
    border-top-left-radius: 6px;
    border-right: none;
    width: 30%;
    flex: none;
    color: #2f4f4f;
    text-align: center;
    background: #f9f9f9;
    height: 100%;
    overflow: auto;

    .chat-title {
      border-bottom: 1px solid #ced4da;
      font-size: 1.3rem;
      padding: 1rem;

      @media ${devices.tablet} {
        padding: 0.7rem;
        font-size: 1.1rem;
      }
      @media ${devices.mobile} {
        padding: 0.5rem;
        font-size: 0.9rem;
      }
      @media only screen and (max-width: 450px) {
        padding: 0.3rem;
        font-size: 0.65rem;
      }
    }
  }
  .chat-list-container {
    width: 70%;
    display: flex;
    flex-direction: column;
    height: 100%;
    box-sizing: border-box;
    border: 1px solid #ced4da;
    border-bottom-right-radius: 6px;
    border-top-right-radius: 6px;
  }
`;

class ChatScreen extends React.Component {
  state = {
    currentUser: null,
    currentRoom: null,
    messages: [],
    error: null,
    usersWhoAreTyping: [],
  };
  componentDidMount = () => {
    this.props.getRooms(this.props.user.email);
    if (this.props.roomId) this.startChat(this.props.roomId);
  };

  startChat = roomId => {
    if (this.state.currentUser && this.state.currentRoom) {
      this.state.currentUser.roomSubscriptions[
        this.state.currentRoom.id
      ].cancel();
    }

    this.setState({ messages: [] });
    const chatManager = new Chatkit.ChatManager({
      instanceLocator: 'v1:us1:02d03086-c977-4990-bbb8-d915c9090f74',
      userId: this.props.user.email,
      tokenProvider: new Chatkit.TokenProvider({
        url: `${process.env.REACT_APP_BASE_URL}chat/auth`,
      }),
    });

    chatManager
      .connect()
      .then(currentUser => {
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
            onUserStartedTyping: user => {
              this.setState({
                usersWhoAreTyping: [
                  ...this.state.usersWhoAreTyping,
                  user.name,
                ],
              });
            },
            onUserStoppedTyping: user => {
              this.setState({
                usersWhoAreTyping: this.state.usersWhoAreTyping.filter(
                  username => username !== user.name,
                ),
              });
            },
          },
        });
      })
      .then(currentRoom => {
        this.setState({ currentRoom });
      })
      .catch(error => this.setState({ error }));
  };

  sendMessage = text => {
    this.state.currentUser.sendMessage({
      text,
      roomId: this.state.currentRoom.id,
    });
  };

  sendTypingEvent = () => {
    this.state.currentUser
      .isTypingIn({ roomId: this.state.currentRoom.id })
      .catch(error => this.setState({ error }));
  };

  render() {
    return (
      <StyledChatScreen className='chat-container'>
        <aside className='whos-online-list-container'>
          <div className='chat-title'>
            Select a conversation to send a message
          </div>
          <UserList
            rooms={this.props.rooms}
            user={this.props.user}
            startChat={this.startChat}
            currentRoom={this.state.currentRoom}
            currentUser={this.state.currentUser}
            isLoading={this.props.isLoading}
          />
        </aside>
        <section className='chat-list-container'>
          <MessageList
            messages={this.state.messages}
            userId={this.props.user.email}
            currentRoom={this.state.currentRoom}
            user={this.props.user}
          />
          <TypingIndicator
            usersWhoAreTyping={this.state.usersWhoAreTyping}
          />
          <SendMessageForm
            onSubmit={this.sendMessage}
            onChange={this.sendTypingEvent}
            currentRoom={this.state.currentRoom}
          />
        </section>
      </StyledChatScreen>
    );
  }
}

const mapStateToProps = state => {
  return {
    roomId: state.chatReducer.roomId,
    rooms: state.chatReducer.rooms,
    user: state.userReducer.user,
    isLoading: state.chatReducer.isLoading,
  };
};

export default connect(mapStateToProps, { getRooms })(ChatScreen);
