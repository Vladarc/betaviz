import { HeaderReducer } from "./headerReducer";
import { NavBarReducer } from "./navBarReducer";
import { OriginalCardReducer } from "./originalCardReducer"
import { orderInformationReducer } from "./orderInformationReducer"
import { cardTemplatesReducer } from "./cardTemplatesReducer"
import { combineReducers } from "redux-immutable";

export const rootReducers = combineReducers({
  HeaderReducer,
  NavBarReducer,
  OriginalCardReducer,
  orderInformationReducer,
  cardTemplatesReducer
});

