import {
  CHANGE_IMAGE,
  SELECT_QTY_HANDLE,
  SELECT_CORNER_HANDLE,
  SELECT_MATERIAL_HANDLE,
  SELECT_SIZE_HANDLE,
  SELECT_DEFAULT_COMBINATION,
  FETCH_PRICE_DATA,
  FETCH_PRICE_DATA_SUCCESS
} from '../constants/originalCardConstants';

export const changeImage = (payload) => ({
  type: CHANGE_IMAGE,
  payload,
});

export const selectRowHandle = (payload) => ({
  type: SELECT_QTY_HANDLE,
  payload,
});
export const selectCornerHandle = (payload) => ({
  type: SELECT_CORNER_HANDLE,
  payload,
});
export const selectMaterialHandle = (payload) => ({
  type: SELECT_MATERIAL_HANDLE,
  payload,
});
export const selectSizeHandle = (payload) => ({
  type: SELECT_SIZE_HANDLE,
  payload,
});
export const selectDefaultCombination = (payload) => ({
  type: SELECT_DEFAULT_COMBINATION,
  payload,
});

export const fetchPriceAndQtyData = () => ({
  type: FETCH_PRICE_DATA,
 });
export const fetchPriceAndQtyDataSuccess = (price) => ({
  type: FETCH_PRICE_DATA_SUCCESS,
  price
 });
 
