import { initialState } from "../initialState/index";
import {
  SET_CRAFT_ORDER_OPTIONS,
  SET_NEW_ORDER_SIZE,
  SET_NEW_ORDER_PAPER,
} from "../constants/orderInformationConstants";

export const orderInformationReducer = (
  state = initialState.orderInfo,
  action
) => {
  switch (action.type) {
    case SET_CRAFT_ORDER_OPTIONS:
      return state
        .set("order", action.payload.selectedElements)
        .set("price", action.payload.price)
        .set('optionsSelected',true);

    case SET_NEW_ORDER_SIZE:
      return state.setIn(["order", "size"], action.payload);

    case SET_NEW_ORDER_PAPER:
      return state.setIn(["order","paper"],action.payload)

    default:
      return state;
  }
};
