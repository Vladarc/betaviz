import { initialState } from "../initialState/index";
import { TOGGL_SUB_MENU } from "../constants/navBarConstants"


export const NavBarReducer = (state = initialState.navBar, action) => {
  switch (action.type) {
    case TOGGL_SUB_MENU:
      let subMenu = state
        .setIn(
          ["navBarLinks", action.payload.index, "subMenu", "isActive"],
          action.payload.isOpened
        )
        .setIn(
          ["navBarLinks", action.payload.index, "isVisible"],
          action.payload.isOpened
        )
        .setIn(["isBackDropVisible"], action.payload.isOpened);

      return subMenu;

    default:
      return state;
  }
};
