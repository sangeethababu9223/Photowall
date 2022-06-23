import React from "react";
import Photo from "./photo";
import propTypes from "prop-types";
import { Link } from "react-router-dom";
function PhotoWall(props) {
        return <div>
            <Link to="/addPhoto" className="addIcon"></Link>
            <div className="photoGrid">
                {props.posts
                .sort(function(x,y) {
                    return y.id - x.id;
                })
                .map((post, index) => <Photo key={post.id} post={post} {...props} index={index}/>)}
            </div>
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
}
export default PhotoWall;