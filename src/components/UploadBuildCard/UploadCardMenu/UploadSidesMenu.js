import React from 'react';
import UploadFrontImage from './UploadFrontImage';
import '../../../styles/uploadSidesMenu.scss';
import { Container } from '@material-ui/core';

const UploadSidesMenu = (props) => (
  <Container maxWidth="lg">
    <div>Upload Component</div>
    <div className="upload-inputs-wrapper">
      <UploadFrontImage {...props} />
    </div>
  </Container>
);
export default UploadSidesMenu;
