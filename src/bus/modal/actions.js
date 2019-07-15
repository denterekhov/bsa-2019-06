import { types } from './types';

export const modalActions = {
  toggleModalOpen: () => ({
    type: types.TOGGLE_MODAL_OPEN,
  }),

  setEditingMessageId: (id) => ({
    type: types.SET_EDITING_MESSAGE_ID,
    payload: id,
  }),
};