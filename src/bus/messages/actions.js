import { types } from './types';
import { api } from '../../REST';

export const messagesActions = {
  fetchMessages: () => async(dispatch) => {
    try {
      dispatch({
        type: types.FETCH_MESSAGES,
      })
      const data = await api.messages.fetchMessages();
      dispatch(messagesActions.fillMessages(data));
    } catch (error) {
      console.log('NETWORK ERROR', error.message);
    }
  },

  fillMessages: (messages) => ({
    type:    types.FILL_MESSAGES,
    payload: messages,
  }),

  createMessage: (message) => ({
    type:    types.CREATE_MESSAGE,
    payload: message,
  }),

  toggleMessageLike: (id) => ({
    type:    types.TOGGLE_MESSAGE_LIKE,
    payload: id,
  }),

  deleteMessage: (id) => ({
    type:    types.DELETE_MESSAGE,
    payload: id,
  }),

  updateMessage: (id, text) => ({
    type:    types.UPDATE_MESSAGE,
    payload: {id, text},
  }),
};