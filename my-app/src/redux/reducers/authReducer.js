import { CHANGE_MODAL_STATE } from '../constants/index';

const initState = {
  isModalOpen: false,
  modalType: 'login',
};

const authReducer = (state = initState, action = {}) => {
  switch (action.type) {
    case CHANGE_MODAL_STATE:
      return {
        ...state,
        isModalOpen: action.payload.status,
        modalType: action.payload.type,
      };
    default:
      return state;
  }
};

export default authReducer;
