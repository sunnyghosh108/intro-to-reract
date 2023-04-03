import React from 'react';
import { Link } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const{id,title,userId,body}=post;
    return (
        <div className='post'>
            <h2>Id:{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <button>Show post Details</button>
        </div>
    );
};

export default Post;