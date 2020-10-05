import {
  CHANGE_IMAGE,
  SELECT_QTY_HANDLE,
  SELECT_CORNER_HANDLE,
  SELECT_MATERIAL_HANDLE,
  SELECT_SIZE_HANDLE,
  SELECT_DEFAULT_COMBINATION,
} from "../constants/originalCardConstants";

export const changeImage = (payload) => {
  return {
    type: CHANGE_IMAGE,
    payload,
  };
};

export const selectRowHandle = (payload) => {
  return {
    type: SELECT_QTY_HANDLE,
    payload,
  };
};
export const selectCornerHandle = (payload) => {
  return {
    type: SELECT_CORNER_HANDLE,
    payload,
  };
};
export const selectMaterialHandle = (payload) => {
  return {
    type: SELECT_MATERIAL_HANDLE,
    payload,
  };
};
export const selectSizeHandle = (payload) => {
  return {
    type: SELECT_SIZE_HANDLE,
    payload,
  };
};
export const selectDefaultCombination = (payload) => {
  return {
    type: SELECT_DEFAULT_COMBINATION,
    payload,
  };
};
