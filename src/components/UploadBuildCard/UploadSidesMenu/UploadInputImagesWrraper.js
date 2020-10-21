import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../../../styles/UploadInputImagesWrraper.scss';

const UploadInputImagesWrraper = (props) => {
  const [draggingCls, setDraggingCls] = useState('');
  const cls = ['draggable-container__wrraper', draggingCls];

  const draggableHandler = (event) => {
    event.stopPropagation();
    event.preventDefault();
    if (draggingCls === '') setDraggingCls('dragging');
  };

  const leaveFromAreaHandler = () => setDraggingCls('');

  const fileUploadHandler = (event) => {
    if (event.target.files[0]) {
      props.setFrontImageURL(URL.createObjectURL(event.target.files[0]));
      props.onNextUploadImageStep(1);
    }
  };
  return (
    <div>
      <div className="draggable-container">
        <div className={cls.join(' ')}>
          <input
            className="file-browser-input"
            type="file"
            id="file-browser-input"
            name="file-browser-input"
            onDragOver={draggableHandler}
            onDragLeave={leaveFromAreaHandler}
            onDrop={fileUploadHandler}
            onChange={fileUploadHandler}
          />
        </div>
        <div className="upload-image-title">Upload Image</div>
      </div>
    </div>
  );
};
UploadInputImagesWrraper.propTypes = {
  setFrontImageURL: PropTypes.func,
  onNextUploadImageStep: PropTypes.func,
};
export default UploadInputImagesWrraper;
