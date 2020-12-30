import { Map } from 'immutable';
import logo from '../image/logo.jpg';

const UploadCardBuilderState = Map({
  step: 1,
  frontImageUrl: logo,
  orientation: {
    currentOrientation: 'landscape',
    size: {
      width: 481,
      height: 265,
    },
  },
  frontCoord: Map({}),
  frontDefaultCoord: Map({}),
});

export default UploadCardBuilderState;
