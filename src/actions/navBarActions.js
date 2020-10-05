import { TOGGL_SUB_MENU } from "../constants/navBarConstants"


export const toggleNavBarMenuHandler = (payload) => {
    return {
      type: TOGGL_SUB_MENU,
      payload,
    };
  };