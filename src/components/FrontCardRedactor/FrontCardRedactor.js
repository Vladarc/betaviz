import React from 'react';
import PropTypes from 'prop-types';
import CanvasLandscape from '../CanvasImgRedactor/CanvasRedactorLandscape';
import CanvasPortrait from '../CanvasImgRedactor/CanvasRedactorPortrait';
import '../../styles/CardRedactorStyles.scss';
import UtilityBar from '../UtilityBar/UtilityBar';

const FrontCardRedactor = (props) => {
  console.log(props.updateFrontCoord);
  const cls = [
    'image-redactor__indent',
    props.orderInfo.corner.value === 'rounded' ? 'rounded-corner' : '',
    props.orientation.currentOrientation === 'portrait' ? 'front-portrait' : '',
  ];

  return (
    <>
      <div className="edit-workspace">
        <div className="edit-workspace__container">
          <div className="image-redactor">
            <div className={cls.join(' ')}>
              {props.orientation.currentOrientation === 'landscape' ? (
                <CanvasLandscape
                  ImgUrl={props.frontImgUrl}
                  setImageURL={props.setFrontImageURL}
                  orientation={props.orientation}
                  setImageCoordinates={props.setFrontImgCoord}
                  defaultImageCoord={props.frontDefaultCoord}
                />
              ) : (
                <CanvasPortrait
                  ImgUrl={props.frontImgUrl}
                  setImageURL={props.setFrontImageURL}
                  orientation={props.orientation}
                  setImageCoordinates={props.setFrontImgCoord}
                  defaultImageCoord={props.frontDefaultCoord}
                />
              )}
            </div>
          </div>
        </div>
      </div>
      <UtilityBar
        setNewCanvasOrientation={props.setNewCanvasOrientation}
        orientation={props.orientation.currentOrientation}
        corners={props.orderInfo.corner.value}
        setNewCorner={props.setNewCornerValue}
        updateCanvasCoord={props.updateFrontCoord}
      />
    </>
  );
};
FrontCardRedactor.propTypes = {
  setFrontImgCoord: PropTypes.func,
  frontDefaultCoord: PropTypes.object,
  updateFrontCoord: PropTypes.func,
  orderInfo: PropTypes.object,
  currentOrientation: PropTypes.string,
  orientation: PropTypes.object,
  frontImgUrl: PropTypes.string,
  setFrontImageURL: PropTypes.func,
  setNewCornerValue: PropTypes.func,
  setNewCanvasOrientation: PropTypes.func,
};
export default FrontCardRedactor;
