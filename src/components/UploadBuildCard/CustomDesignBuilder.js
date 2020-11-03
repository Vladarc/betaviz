import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import UploadBuildCardHeader from '../UploadBuildCardHeader/UploadBuildCardHeader';
import cardBuilderSteeper from '../../handlers/CardBuilderSteeper';

const CustomDesignBuilder = (props) => {
  const BUILDER_CLASS = 'body--card-builder';

  const blockDraggingEvents = (event) => {
    let { target } = event;
    if (!target.classList.contains('upload-input')) {
      event.preventDefault();
      event.stopPropagation();
    }
  };

  useEffect(() => {
    document.body.classList.add(BUILDER_CLASS);
    window.addEventListener('drop', blockDraggingEvents);
    window.addEventListener('dragover', blockDraggingEvents);
    return () => {
      document.body.classList.remove(BUILDER_CLASS);
      window.removeEventListener('drop', blockDraggingEvents);
      window.addEventListener('dragover', blockDraggingEvents);
    };
  });
  return (
    <>
      <UploadBuildCardHeader />

      {cardBuilderSteeper(props.step, props)}
    </>
  );
};
CustomDesignBuilder.propTypes = {
  step: PropTypes.number,
};
export default CustomDesignBuilder;
