import React from 'react';
import '../../styles/UploadCardImage.scss';
import { NavLink } from 'react-router-dom';
import { Image } from '../UI/Image/Image.jsx';
import UploadImage from '../../image/upload-card.jpg';

const UploadCardImage = () => (
  <div className="upload-design">
    <NavLink className="upload-design__wrapper" to="/card_builder">
      <Image src={UploadImage} className="upload-design__image" />
    </NavLink>

    <div className="upload-design__features">
      <div className="upload-design__title">Upload a full design</div>
      <div className="upload-design__subtitle">See our guidelines.</div>
    </div>

    <div className="upload-design__footer">
      <NavLink className="upload-design__link" to="/card_builder">
        Upload my design
      </NavLink>
    </div>
  </div>
);

export default UploadCardImage;
