import MainComp from "./main";
import { connect } from "react-redux";
import {bindActionCreators } from "redux";
import {removePost} from "../redux/actions";

function mapStateToProps(state) {
    return {
        posts:state
    } 
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({removePost}, dispatch);
}

const App = connect(mapStateToProps, mapDispatchToProps)(MainComp);

export default App;