import React from "react";
import {connect} from "react-redux";
import {Route, Redirect} from "react-router-dom";
import {toJS} from "../components/hoc/toJs/toJs";

const RouteWrraper = ({component: Component, isPrivate, isSelectOptions, ...rest}) => {

    if (isPrivate && !isSelectOptions) {
        return <Redirect to="/originalcard"/>
    }

    return <Route {...rest} component={Component}/>
};

const mapStateToProps = state => ({isSelectOptions: state.getIn(['orderInformationReducer', 'optionsSelected'])});


export default connect(mapStateToProps)(toJS(RouteWrraper));
