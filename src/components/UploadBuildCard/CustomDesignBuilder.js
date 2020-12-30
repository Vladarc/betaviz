import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UploadBuildCardHeader from '../UploadBuildCardHeader/UploadBuildCardHeader';
import cardBuilderSteeper from '../../handlers/CardBuilderSteeper';

const CustomDesignBuilder = (props) => {
  const blockDraggingEvents = (event) => {
    let { target } = event;
    if (!target.classList.contains('upload-input')) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    window.addEventListener('drop', blockDraggingEvents);
    window.addEventListener('dragover', blockDraggingEvents);
    return () => {
      window.removeEventListener('drop', blockDraggingEvents);
      window.addEventListener('dragover', blockDraggingEvents);
    };
  });
  return (
    <div className="workspace-wrraper">
      <UploadBuildCardHeader />

      {cardBuilderSteeper(props.step, props)}
    </div>
  );
};
CustomDesignBuilder.propTypes = {
  step: PropTypes.number,
};
export default CustomDesignBuilder;
