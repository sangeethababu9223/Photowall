import React from 'react';
import { useParams } from 'react-router-dom';
import Photo from './photo';
import Comments from './comments';
function Single(props) {
    let { id } = useParams(); 
    id = Number(id);
    const posts = props.posts;
    const post = posts.find(post => post.id ===id )
    return <div className="single-photo">
        <Photo post={post} />
        <Comments />
    </div>
}

export default Single;