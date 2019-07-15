import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import CircularProgress from '@material-ui/core/CircularProgress';
import CssBaseline from '@material-ui/core/CssBaseline';
import Container from '@material-ui/core/Container';

import { Header } from '../Header';
import { MessageList } from '../MessageList';
import { MessageInput } from '../MessageInput';
import { Modal } from '../Modal';

import { messagesActions } from '../../bus/messages/actions';
import { modalActions } from '../../bus/modal/actions';

import './App.css';

class App extends Component {
  componentDidMount() {
    const { actions } = this.props;
    actions.fetchMessages();
  }

  render() {
    const { messages, editingMessageId, isModalOpen, actions } = this.props;
    console.log('actions: ', actions);
    console.log('messages: ', messages);
    const usersQuantity = (new Set(messages.map(({user}) => user))).size;
    const lastMessageTime = messages.length && messages[messages.length - 1].created_at;

    return (
      <>
        {messages.length 
          ? <>
              <Header 
                messageQuantity={messages.length}
                usersQuantity={usersQuantity}
                lastMessageTime={lastMessageTime}
              />
              <CssBaseline />
              <Container maxWidth="md">
              <Modal 
                messages={messages}
                editingMessageId={editingMessageId}
                isModalOpen={isModalOpen}
                updateMessage={actions.updateMessage}
                toggleModalOpen={actions.toggleModalOpen}  
              />
                <MessageList 
                  messages={messages}
                  toggleMessageLike={actions.toggleMessageLike}
                  deleteMessage={actions.deleteMessage}
                  setEditingMessageId={actions.setEditingMessageId}
                  toggleModalOpen={actions.toggleModalOpen}
                />
                <MessageInput 
                  createMessage={actions.createMessage}
                />
              </Container>
          </>
          : <CircularProgress
              className='spinner'
              size={60}
              thickness={4}
            />
        }
      </>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    messages: state.messages,
    editingMessageId: state.modal.editingMessageId,
    isModalOpen: state.modal.isModalOpen,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    actions: bindActionCreators({
      ...messagesActions,
      ...modalActions,
    },
    dispatch),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
