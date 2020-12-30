import {
  SET_CRAFT_ORDER_OPTIONS,
  SET_NEW_ORDER_SIZE,
  SET_NEW_ORDER_PAPER,
  SET_NEW_ORDER_CORNER,
} from '../constants/orderInformationConstants';

export const setCraftOptions = (payload) => ({
  type: SET_CRAFT_ORDER_OPTIONS,
  payload,
});

export const setNewSize = (payload) => ({
  type: SET_NEW_ORDER_SIZE,
  payload,
});

export const setNewPaperValue = (payload) => ({
  type: SET_NEW_ORDER_PAPER,
  payload,
});

export const setNewCornerValue = (payload) => ({
  type: SET_NEW_ORDER_CORNER,
  payload,
});
