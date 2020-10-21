import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Container } from '@material-ui/core';
import UploadBuildCardHeader from '../UploadBuildCardHeader/UploadBuildCardHeader';
import cardBuilderSteeper from '../../handlers/CardBuilderSteeper';

const CustomDesignBuilder = (props) => {
  const BUILDER_CLASS = 'body--card-builder';

  useEffect(() => {
    document.body.classList.add(BUILDER_CLASS);
    return () => {
      document.body.classList.remove(BUILDER_CLASS);
    };
  });
  return (
    <>
      <UploadBuildCardHeader />
      <Container maxWidth="lg">
        {cardBuilderSteeper(props.step, props)}
      </Container>
    </>
  );
};
CustomDesignBuilder.propTypes = {
  step: PropTypes.number,
};
export default CustomDesignBuilder;
