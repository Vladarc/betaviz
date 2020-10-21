import React from 'react';
import { Container } from '@material-ui/core';
import { Image } from '../UI/Image/Image';
import '../../styles/UploadBuildCardHeader.scss';
import Logo from '../../image/logo.jpg';
import { Link } from 'react-router-dom';
import BuilderNameField from './BuilderNameField/BuilderNameField';

const UploadBuildCardHeader = () => (
  <header className="builder-header">
    <Container maxWidth="lg">
      <ul className="header-list">
        <li className="header-list__logo">
          <Link to="/">
            <Image src={Logo} />
          </Link>
        </li>

        <li className="header-list__product-name">
          <BuilderNameField />
        </li>
      </ul>
    </Container>
  </header>
);

export default UploadBuildCardHeader;
