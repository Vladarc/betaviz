import React from 'react';
import HomePageRoute from "./homePageRoutes"
import OriginalCardRoute from "./originalCardRoutes"
import CustomDesignBuilderRoute from "./customDesignBuilderRoutes"
import CardTemplatesRoute from "./cardTemplatesRoutes"
import {Switch} from "react-router-dom";
import Route from "./RouteWrraper"


const Routes = () => {
    return (

        <Switch>
            <Route exact      {...HomePageRoute.homePage}/>
            <Route exact      {...OriginalCardRoute.originalCard} />
            <Route isPrivate  {...CardTemplatesRoute.cardTemplates}/>
            <Route isPrivate  {...CustomDesignBuilderRoute.designBuilder}/>
        </Switch>

    )
};


export default Routes;
