import React from 'react';
import { Switch } from 'react-router-dom';
import HomePageRoute from './homePageRoutes';
import OriginalCardRoute from './originalCardRoutes';
import CustomDesignBuilderRoute from './customDesignBuilderRoutes';
import CardTemplatesRoute from './cardTemplatesRoutes';
import Route from './RouteWrapper';

const Routes = () => (
  <Switch>
    <Route exact {...HomePageRoute.homePage} />
    <Route exact {...OriginalCardRoute.originalCard} />
    <Route isPrivate {...CardTemplatesRoute.cardTemplates} />
    <Route isPrivate {...CustomDesignBuilderRoute.designBuilder} />
  </Switch>
);

export default Routes;
