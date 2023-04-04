import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Post.css'
const Post = ({post}) => {
    const{id,title,userId,body}=post;
    const navigate=useNavigate();
    const handleNavigation=()=>{
        navigate(`/post/${id}`);
    }
    return (
        <div className='post'>
            <h2>Id:{id}</h2>
            <h4>{title}</h4>
            <p>{body}</p>
            <Link to={`/post/${id}`}>Show Details</Link>
            <Link to={`/post/${id}`}><button>Show post Details</button></Link>
            <button onClick={handleNavigation}>With button handler</button>
        </div>
    );
};

export default Post;