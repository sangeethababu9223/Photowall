import React from "react";
import Photo from "./photo";
import propTypes from "prop-types";
function PhotoWall(props) {
        return <div className="photoGrid">
            {props.posts.map((post, index) => <Photo key={index} post={post} onRemovephoto={props.onRemovephoto}/>)}
        </div>
}
// class PhotoWall extends Component {
//     render(){
//         return <div className="photoGrid">
//             {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovephoto={this.props.onRemovephoto}/>)}
//         </div>
//     }
// }
PhotoWall.propTypes = {
    posts: propTypes.array.isRequired,
    onRemovephoto: propTypes.func.isRequired
}
export default PhotoWall;