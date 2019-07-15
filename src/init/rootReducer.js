import { combineReducers } from 'redux';
import { messagesReducer as messages } from '../bus/messages/reducer';
import { modalReducer as modal } from '../bus/modal/reducer';

export const rootReducer = combineReducers({
  messages,
  modal,
});