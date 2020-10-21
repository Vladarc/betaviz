import { initialState } from '../initialState/index';
import { TOGGL_SUB_MENU } from '../constants/navBarConstants';

export const navBarReducer = (state = initialState.navBar, action) => {
  switch (action.type) {
    case TOGGL_SUB_MENU:
      return state
        .setIn(
          ['navBarLinks', action.payload.index, 'subMenu', 'isActive'],
          action.payload.isOpened
        )
        .setIn(
          ['navBarLinks', action.payload.index, 'isVisible'],
          action.payload.isOpened
        )
        .setIn(['isBackDropVisible'], action.payload.isOpened);
    default:
      return state;
  }
};
