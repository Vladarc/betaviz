import React from "react";
import CustomDesignBuilder from "./CustomDesignBuilder";
import {toJS} from "../hoc/toJs/toJs";
import {connect} from "react-redux";
import {bindActionCreators} from 'redux'

const CustomDesignBuilderContainer = props => {

    return <CustomDesignBuilder {...props} />
};

const mapStateToProps = state => {
    return {};
};

const mapDispatchToProps = dispatch => {
    return {
        dispatch,
        ...bindActionCreators({}, dispatch)

    };
};

export default connect(mapStateToProps, mapDispatchToProps)(toJS(CustomDesignBuilderContainer));



