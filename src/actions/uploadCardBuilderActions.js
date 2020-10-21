import {
  SET_FRONT_IMAGE_URL,
  SET_UPLOAD_IMAGE_STEP,
} from '../constants/uploadCardBuilderConstants';

export const onNextUploadImageStep = (payload) => ({
  type: SET_UPLOAD_IMAGE_STEP,
  payload,
});

export const setFrontImageURL = (payload) => ({
  type: SET_FRONT_IMAGE_URL,
  payload,
});
