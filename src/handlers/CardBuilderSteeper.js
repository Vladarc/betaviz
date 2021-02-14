import React from 'react';
import UploadSidesMenu from '../components/UploadBuildCard/UploadCardMenu/UploadSidesMenu';
import FrontCardRedactor from '../components/FrontCardRedactor/FrontCardRedactor';

const cardBuilderSteeper = (step, props) => {
  switch (step) {
    case 1:
      return <FrontCardRedactor {...props} />;
    default:
      return <UploadSidesMenu {...props} />;
  }
};

export default cardBuilderSteeper;
