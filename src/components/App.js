import MainComp from "./main";
import { connect } from "react-redux";
function mapStateToProps(state) {
    return {
        posts:state
    } 
}
const App = connect(mapStateToProps)(MainComp);

export default App;