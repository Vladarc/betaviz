import { initialState } from '../initialState/index';
import {
  SET_CRAFT_ORDER_OPTIONS,
  SET_NEW_ORDER_SIZE,
  SET_NEW_ORDER_PAPER,
  SET_NEW_ORDER_CORNER,
} from '../constants/orderInformationConstants';

export const orderInformationReducer = (
  state = initialState.orderInfo,
  action
) => {
  switch (action.type) {
    case SET_CRAFT_ORDER_OPTIONS:
      return state
        .setIn(
          ['order', 'size', 'value'],
          action.payload.selectedElements.size.value
        )
        .setIn(
          ['order', 'size', 'measure'],
          action.payload.selectedElements.size.measure
        )
        .setIn(
          ['order', 'corner', 'value'],
          action.payload.selectedElements.corner.value
        )
        .setIn(
          ['order', 'material', 'value'],
          action.payload.selectedElements.material.value
        )
        .setIn(
          ['order', 'paper', 'value'],
          action.payload.selectedElements.paper.value
        )
        .setIn(
          ['order', 'qty', 'value'],
          action.payload.selectedElements.qty.value
        )
        .setIn(['order', 'price'], action.payload.price);

    case SET_NEW_ORDER_CORNER:
      return state.setIn(['order', 'corner', 'value'], action.payload);

    case SET_NEW_ORDER_SIZE:
      return state.setIn(['order', 'size', 'value'], action.payload);

    case SET_NEW_ORDER_PAPER:
      return state.setIn(['order', 'paper', 'value'], action.payload);

    default:
      return state;
  }
};
