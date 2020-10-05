import {
  SET_CRAFT_ORDER_OPTIONS,
  SET_NEW_ORDER_SIZE,
  SET_NEW_ORDER_PAPER,
} from "../constants/orderInformationConstants";

export const setCraftOptions = (payload) => {
  return {
    type: SET_CRAFT_ORDER_OPTIONS,
    payload,
  };
};

export const setNewSize = (payload) => {
  return {
    type: SET_NEW_ORDER_SIZE,
    payload,
  };
};

export const setNewPaperValue = (payload) => {
  return {
    type: SET_NEW_ORDER_PAPER,
    payload,
  };
};
