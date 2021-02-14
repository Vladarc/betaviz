import CustomDesignBuilderContainer from '../components/UploadBuildCard/CustomDesignBuilderContainer';
import generatePageWrapper from '../handlers/generatePageWrapper';

export default {
  designBuilder: {
    path: '/card_builder',
    component: generatePageWrapper({
      component: CustomDesignBuilderContainer,
      isVisibleHeader: false,
    }),
  },
};
