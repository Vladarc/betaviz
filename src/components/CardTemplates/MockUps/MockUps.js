import React from 'react';
import '../../../styles/MockUps.scss';
import UploadCardImage from '../../UploadImageCard/UploadCardImage';

const MockUps = () => {
  return (
    <div className="mock-up">
      <div className="mock-up__item">
        <UploadCardImage />
      </div>
    </div>
  );
};

export default MockUps;
