import {
  SET_FRONT_IMAGE_URL,
  SET_UPLOAD_IMAGE_STEP,
  SET_FRONT_IMG_COORD,
  UPDATE_FRONT_COORD,
  SET_NEW_CANVAS_ORIENTATION,
} from '../constants/uploadCardBuilderConstants';

export const onNextUploadImageStep = (payload) => ({
  type: SET_UPLOAD_IMAGE_STEP,
  payload,
});

export const setFrontImageURL = (payload) => ({
  type: SET_FRONT_IMAGE_URL,
  payload,
});

export const setFrontImgCoord = (payload) => ({
  type: SET_FRONT_IMG_COORD,
  payload,
});

export const updateFrontCoord = () => ({
  type: UPDATE_FRONT_COORD,
});

export const setNewCanvasOrientation = (payload) => ({
  type: SET_NEW_CANVAS_ORIENTATION,
  payload,
});
