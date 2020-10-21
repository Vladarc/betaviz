import React from 'react';
import PageWrapper from '../components/hoc/MainContentWrraper/MainContentWrraper';

function generatePageWrapper(initProps) {
  // eslint-disable-next-line react/display-name
  return (props) => <PageWrapper {...initProps} {...props} />;
}

export default generatePageWrapper;
