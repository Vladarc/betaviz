import { initialState } from '../initialState/index';
import { HOVER_TOGGL_HANDLER } from '../constants/headerConstants';

export const headerReducer = (state = initialState.header, action) => {
  switch (action.type) {
    case HOVER_TOGGL_HANDLER:
      return state.setIn(['languageSelectClasses', 'isOpen'], action.payload);

    default:
      return state;
  }
};
