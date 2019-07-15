import { types } from './types';

const initialState = [];

export const messagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.FILL_MESSAGES:
      return [...action.payload];

    case types.CREATE_MESSAGE:
      return [...state, action.payload];
      
    case types.TOGGLE_MESSAGE_LIKE:
      return state.map(message => message.id !== action.payload 
        ? message
        : {
          ...message,
          isLiked: !message.isLiked,
        } 
      )

    case types.DELETE_MESSAGE:
      return state.filter(message => message.id !== action.payload);

    case types.UPDATE_MESSAGE:
      return state.map(post => post.id !== action.payload.id
        ? post
        : {
          ...post,
          message: action.payload.text
        }
      );
      
    default:
      return state;
  }
}