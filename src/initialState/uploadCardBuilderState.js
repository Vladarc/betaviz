import { Map } from 'immutable';

const UploadCardBuilderState = Map({
  step: 0,
  frontImageUrl: '',
  orientation: {
    currentOrientation: 'landscape',
    landscape: {
      width: 481,
      height: 265,
    },
  },
});

export default UploadCardBuilderState;
