import React from "react";
import propTypes from "prop-types";

function Photo(props) {
        const post = props.post;
        return <figure className="figure">
            <img className="photo" src={post.imageLink} alt={post.description} />
            <figcaption><p>{post.description}</p></figcaption>
            <div className="button-container">
                <button className="button" onClick={()=>{
                    props.onRemovephoto(post);
                }}>Remove</button>
            </div>
        </figure>
}
// class Photo extends Component {
//     render(){
//         const post = this.props.post;
//         return <figure className="figure">
//             <img className="photo" src={post.imageLink} alt={post.description} />
//             <figcaption><p>{post.description}</p></figcaption>
//             <div className="button-container">
//                 <button className="button" onClick={()=>{
//                     this.props.onRemovephoto(post);
//                 }}>Remove</button>
//             </div>
//         </figure>
//     }
// }

Photo.propTypes = {
    post: propTypes.object.isRequired,
}

export default Photo;