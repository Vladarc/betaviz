import React from "react";
import {toJS} from "../hoc/toJs/toJs";
import {connect} from "react-redux";
import Header from "./Header"
import {hoverTogglHandler} from "../../actions/headerActions";


const HeaderContainer = props => < Header {...props}/>;


const mapStateToProps = (state) => {
    return {
        headerLinks: state.getIn(["headerReducer", "headerLinks"]),
        languagesList: state.getIn(["headerReducer", "language"]),
        langSelectClasses: state.getIn(["headerReducer", "languageSelectClasses"]),

    };
};

const mapDispatchToProps = (dispatch) => {
    return {

        hoverTogglHandler: (payload) => dispatch(hoverTogglHandler(payload))
    };
};


export default connect(mapStateToProps, mapDispatchToProps)(toJS(HeaderContainer));
