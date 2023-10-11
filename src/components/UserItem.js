import React from "react";
import { Link } from "react-router-dom";

const UserItem = ({name,profile}) => {
    return(
        <div className="card text-center">
            <img src={profile} alt={name} className="round-img" style={{width:"60px"}}/>
            <h3>{name}</h3>
            <Link to={`/users/${name}`} className="btn btn-dark btn-sm my-1">More</Link>
        </div>
    )
}

export default UserItem;