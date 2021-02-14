import { initialState } from '../initialState/index';
import {
  SET_FRONT_IMAGE_URL,
  SET_UPLOAD_IMAGE_STEP,
  SET_FRONT_IMG_COORD,
  UPDATE_FRONT_COORD,
  SET_NEW_CANVAS_ORIENTATION,
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

    case SET_FRONT_IMG_COORD:
      return state.set('frontCoord', action.payload);

    case UPDATE_FRONT_COORD:
      return state.set('frontDefaultCoord', state.get('frontCoord'));

    case SET_NEW_CANVAS_ORIENTATION:
      return state.setIn(['orientation', 'currentOrientation'], action.payload);

    default:
      return state;
  }
};
