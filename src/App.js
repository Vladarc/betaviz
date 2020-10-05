import React from "react";

import "./scss/App.scss";

import Layout from "./components/hoc/Layout/Layout";
import Header from "./components/Header/Header";
import OriginalCard from "./components/CardCraftOptions/OriginalCard/OriginalCardContainer";
import { Switch, Route } from "react-router-dom";
import Home from "./components/HomePage/HomePage";
import CardTemplates from "./components/CardTemplates/CardTemplatesContainer";
import OrderInformation from "./components/hoc/OrderInformation/OrderInformation"
const App = (props) => {
  return (
    <>
      <Header />
      <Layout>
        <OrderInformation>
        <Switch>
          <Route path="/originalcard" component={OriginalCard} />
          <Route exact path="/" component={Home} />
          <Route path="/cardtemplates" component={CardTemplates} />
        </Switch>
        </OrderInformation>
      </Layout>
    </>
  );
};

export default App;
