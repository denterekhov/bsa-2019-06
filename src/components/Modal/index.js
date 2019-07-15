import React, { createRef } from 'react';
import Button from '@material-ui/core/Button';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogTitle from '@material-ui/core/DialogTitle';
import TextareaAutosize from '@material-ui/core/TextareaAutosize';
import { array, bool, string, func } from 'prop-types';

import './Modal.css';

const Modal = (props) => {
  const { messages, isModalOpen, editingMessageId, updateMessage, toggleModalOpen } = props;
  const textAreaRef = createRef();
  const editingMessage = messages.find(message => message.id === editingMessageId);

  const saveMessage = () => {
    const value = (textAreaRef.current.value).trim();
    if (!value) {
      return;
    }
    updateMessage(editingMessageId, value);
    toggleModalOpen();
  }

  const cancelUpdateMessage = () => {
    toggleModalOpen();    
  }

  return (
    <>
      {editingMessage &&
        <div>
          <Dialog
            open={isModalOpen}
            aria-labelledby="alert-dialog-title"
            aria-describedby="alert-dialog-description"
            disableBackdropClick={true}
            disableEscapeKeyDown={true}
          >
            <DialogTitle id="alert-dialog-title">{"Edit message"}</DialogTitle>
            <DialogContent>
              <TextareaAutosize
                ref={textAreaRef}
                aria-label="Textarea" 
                rows={5}  
                defaultValue={editingMessage.message}
                style={{resize: 'none'}}
              />
            </DialogContent>
            <DialogActions>
              <Button onClick={saveMessage} color="primary">
                OK
              </Button>
              <Button onClick={cancelUpdateMessage} color="primary" autoFocus>
                Cancel
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      }
    </>
  );
}

Modal.propTypes = {
  messages: array.isRequired,
  editingMessageId: string.isRequired,
  isModalOpen: bool.isRequired, 
  updateMessage: func.isRequired, 
}


export { Modal };