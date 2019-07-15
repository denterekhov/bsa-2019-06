import React, { Fragment } from 'react';
import Divider from '@material-ui/core/Divider';
import { Message } from '../Message';
import { array, func } from 'prop-types';

const MessageList = ({ messages, deleteMessage, toggleMessageLike, setEditingMessageId, toggleModalOpen }) => {
  const createMessageList = () => {
    return messages.map(( post, ind) => {
      const card = <Message 
        key={post.id}
        post={post}
        toggleMessageLike={toggleMessageLike}
        deleteMessage={deleteMessage}
        setEditingMessageId={setEditingMessageId}
        toggleModalOpen={toggleModalOpen}/>;

      if(messages[ind + 1] && (new Date(messages[ind + 1].created_at)).getDate() - (new Date(messages[ind].created_at)).getDate()) {

        return (
          <Fragment key={post.id}>
            {card}
            <Divider style={{marginTop: 20}}/>
            <p style={{textAlign: 'center'}}>{(new Date(messages[ind + 1].created_at)).toLocaleString('ru', {  month: 'long', day: 'numeric'})}</p>
          </Fragment>
        )
      } else {
        return card;
      }
    })
  }

  const messageList = createMessageList();

  return (
    <>
      {messageList}
    </>
  )
}

MessageList.propTypes = {
  messages: array.isRequired,
  toggleMessageLike: func.isRequired,
  deleteMessage: func.isRequired,
  setEditingMessageId: func.isRequired,
  toggleModalOpen: func.isRequired,
}

export { MessageList };
