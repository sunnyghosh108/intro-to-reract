import React from 'react';
import './Friend.css'
import { Link } from 'react-router-dom';

const Friend = ({friend}) => {
    //console.log(friend);
    const {name,username,id,address,email,phone,website,company}=friend;
    return (
        <div className='friend'>
            <h3>Name:{name},{username}</h3>
            <p>Email:{email}</p>
            <p>Phone no:{phone}</p>
            <p>Address:{address.street}</p>
            <p>website:{website}</p>
            <p>Company:{company.name}</p>
            <p><Link to={`/friend/${id}`}>Show me details</Link></p>
            <p>{}</p>
        </div>
    );
};

export default Friend;