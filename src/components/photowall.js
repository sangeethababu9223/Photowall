import React, { Component } from "react";
import Photo from "./photo";
class PhotoWall extends Component {
    render(){
        return <div className="photoGrid">
            {this.props.posts.map((post, index) => <Photo key={index} post={post} onRemovephoto={this.props.onRemovephoto}/>)}
        </div>
    }
}

export default PhotoWall;