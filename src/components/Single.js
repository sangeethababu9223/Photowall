import React from 'react';
import { useParams } from 'react-router-dom';
import Photo from './photo';
import Comments from './comments';
function Single(props) {
    let { id } = useParams(); 
    id = Number(id);
    const posts = props.posts;
    const post = posts.find(post => post.id === id );
    const comments = props.comments[id] || [];
    const index = posts.findIndex(post =>  post.id === id)
    return <div className="single-photo">
        <Photo post={post} {...props} index={index} />
        <Comments addComment= {props.addComment} comments={comments} id={id} />
    </div>
}

export default Single;