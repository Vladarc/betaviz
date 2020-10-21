import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/HeaderContainer';
import Layout from '../Layout/Layout';

const MainContentWrraper = (props) => {
  const Main = props.component;

  return (
    <>
      {props.isVisibleHeader ? <Header {...props} /> : null}
      <Layout>
        <Main {...props} />
      </Layout>
    </>
  );
};
MainContentWrraper.propTypes = {
  component: PropTypes.elementType,
  isVisibleHeader: PropTypes.bool,
};
export default MainContentWrraper;
