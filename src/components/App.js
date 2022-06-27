import MainComp from "./main";
import { connect } from "react-redux";
import {bindActionCreators } from "redux";
import * as actions from "../redux/actions";

function mapStateToProps(state) {
    return {
        posts:state
    } 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators(actions, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainComp);

export default App;