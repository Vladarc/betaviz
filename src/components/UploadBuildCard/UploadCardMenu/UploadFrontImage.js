import React, { useState, useCallback } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/UploadInputImages.scss';
import UploadIcon from '../../UI/SvgIcon/SvgIcon';

const UploadFrontImage = (props) => {
  const [draggingCls, setDraggingCls] = useState('');
  const [uploadImgTitle, setUploadImgTitle] = useState('Upload Image');
  const cls = ['draggable-container__wrapper ', draggingCls];

  const hoverHandler = useCallback((event) => {
    if (event.type === 'mouseenter') {
      setUploadImgTitle('Click Upload');
    } else if (event.type === 'mouseleave') {
      setUploadImgTitle('Upload Image');
    }
  }, []);

  const draggableHandler = useCallback((event) => {
    event.stopPropagation();
    event.preventDefault();

    if (event.type === 'dragover') {
      setDraggingCls('dragging');
      setUploadImgTitle('drop image');
    } else if (event.type === 'dragleave') {
      setDraggingCls('');
      setUploadImgTitle('Upload Image');
    }
  }, []);

  const fileUploadHandler = (event) => {
    if (event.target.files[0]) {
      props.setFrontImageURL(URL.createObjectURL(event.target.files[0]));
      props.onNextUploadImageStep(1);
    }
  };
  return (
    <div className="draggable-container">
      <div className={cls.join(' ')}>
        <input
          className="file-browser-input-front upload-input"
          type="file"
          id="file-browser-input"
          name="file-browser-input"
          onDragOver={draggableHandler}
          onDragLeave={draggableHandler}
          onDrop={fileUploadHandler}
          onChange={fileUploadHandler}
          onMouseEnter={hoverHandler}
          onMouseLeave={hoverHandler}
        />
      </div>
      <div className="upload-front-image-wrapper">
        <div className="upload-front-image-icon">
          <UploadIcon name="upload" size={['8rem', '8rem']} />
        </div>
        <span className="upload-front-image-title">{uploadImgTitle}</span>
      </div>
    </div>
  );
};
UploadFrontImage.propTypes = {
  setFrontImageURL: PropTypes.func,
  onNextUploadImageStep: PropTypes.func,
};
export default UploadFrontImage;
