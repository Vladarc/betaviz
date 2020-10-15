import React from "react";
import {toJS} from "../hoc/toJs/toJs";
import {connect} from "react-redux";

import {CardTemplates} from "./CardTemplates";
import {setNewSize, setNewPaperValue} from "../../actions/orderInformationActions"
import {Container} from "@material-ui/core";


const CardTemplatesContainer = (props) => <Container maxWidth="lg"> <CardTemplates {...props} /> </Container>;

const mapStateToProps = (state) => {
    return {
        orderOptions: state.getIn(["orderInformationReducer", "order"]),
        sizes: state.getIn(["cardTemplatesReducer", "sizeOptions"]),
        paper: state.getIn(["cardTemplatesReducer", "paperOptions"]),
    };
};
const mapDispatchToProps = (dispatch) => {
    return {
        setNewSize: (payload) => dispatch(setNewSize(payload)),
        setNewPaperValue: (payload) => dispatch(setNewPaperValue(payload))
    };
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(toJS(CardTemplatesContainer));
