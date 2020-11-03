import React, { useRef } from 'react';
import PropTypes from 'prop-types';
import Canvas from '../CanvasImgRedactor/CanvasRedactor';
import '../../styles/CardRedactorStyles.scss';

const FrontCardRedactor = (props) => {
  let { currentOrientation } = props.orientation;
  let { value } = props.orderInfo.corner;

  const cls = [
    'image-redactor__indent',
    value === 'rounded' ? 'rounded-corner' : '',
  ];

  const canvasRef = useRef();
  return (
    <div className="edit-workspace">
      <div className="edit-workspace__container">
        <div className="image-redactor">
          <div className={cls.join(' ')}>
            <Canvas
              ref={canvasRef}
              id="front-canvas"
              ImgUrl={props.frontImgUrl}
              setImageURL={props.setFrontImageURL}
              orientation={props.orientation[currentOrientation]}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
FrontCardRedactor.propTypes = {
  orderInfo: PropTypes.object,
  currentOrientation: PropTypes.string,
  orientation: PropTypes.object,
  frontImgUrl: PropTypes.string,
  setFrontImageURL: PropTypes.func,
};
export default FrontCardRedactor;
