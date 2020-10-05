import { HeaderReducer } from "./headerReducer";
import { NavBarReducer } from "./navBarReducer";
import { OriginalCardReducer } from "./originalCardReducer"


import { combineReducers } from "redux-immutable";

export const rootReducers = combineReducers({
  HeaderReducer,
  NavBarReducer,
  OriginalCardReducer
});

