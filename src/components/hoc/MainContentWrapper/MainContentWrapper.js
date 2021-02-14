import React from 'react';
import PropTypes from 'prop-types';
import Header from '../../Header/HeaderContainer';
import Layout from '../Layout/Layout';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontSize: 16,
  },
});
const MainContentWrapper = (props) => {
  const Main = props.component;

  return (
    <>
      <ThemeProvider theme={theme}>
        {props.isVisibleHeader ? <Header {...props} /> : null}
        <Layout>
          <Main {...props} />
        </Layout>
      </ThemeProvider>
    </>
  );
};
MainContentWrapper.propTypes = {
  component: PropTypes.elementType,
  isVisibleHeader: PropTypes.bool,
};
export default MainContentWrapper;
