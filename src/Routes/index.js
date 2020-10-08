import React from 'react';

import HomePageRoutes from "./homePageRoutes"
import OriginalCardRoutes from "./originalCardRoutes"
import CustomDesignBuilder from "./customDesignBuilderRoutes"
import CardTemplatesRoutes from "./cardTemplatesRoutes"


import {Switch} from "react-router-dom";
import Route from "./RouteWrraper"





const Routes = () => {
    return (

            <Switch>
                <Route exact      {...HomePageRoutes.homePage}/>
                <Route exact      {...OriginalCardRoutes.originalCard} />
                <Route exact isPrivate  {...CardTemplatesRoutes.cardTemplates}/>
                <Route exact isPrivate  {...CustomDesignBuilder.designBuilder}/>
            </Switch>

    )
};


export default Routes;
