import { types } from './types';

const initialState = {
  isModalOpen: false,
  editingMessageId: '',
};

export const modalReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.TOGGLE_MODAL_OPEN:
      return {
        ...state,
        isModalOpen: !state.isModalOpen,
      }

    case types.SET_EDITING_MESSAGE_ID:
      return {
        ...state,
        editingMessageId: action.payload,
      }

    default:
      return state;
  }
}