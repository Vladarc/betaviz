import React from "react";
import "./styles/App.scss";


import Layout from "./components/hoc/Layout/Layout";
import OrderInformation from "./components/hoc/OrderInformation/OrderInformation";


import Header from "./components/Header/Header";


import Routes from "./Routes/index"


const App = (props) => {

    return (
        <>
            <Header/>
            <Layout>
                <OrderInformation>
                    <Routes/>
                </OrderInformation>
            </Layout>
        </>
    );

};


export default App;
