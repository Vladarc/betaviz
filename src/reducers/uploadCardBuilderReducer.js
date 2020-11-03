import { initialState } from '../initialState/index';
import {
  SET_FRONT_IMAGE_URL,
  SET_UPLOAD_IMAGE_STEP,
} from '../constants/uploadCardBuilderConstants';

export const uploadCardBuilderReducer = (
  state = initialState.uploadCardBuilder,
  action
) => {
  switch (action.type) {
    case SET_UPLOAD_IMAGE_STEP:
      return state.set('step', action.payload);

    case SET_FRONT_IMAGE_URL:
      return state.set('frontImageUrl', action.payload);

    default:
      return state;
  }
};
