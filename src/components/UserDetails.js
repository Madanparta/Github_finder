import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from 'react-router';
import { Link } from "react-router-dom";
import ReposeList from "./ReposeList";

const UserDetails = () => {
    const {anything} = useParams();

    const [user,setUser] = useState([])
    const [repose,setRepose] = useState([]);

    useEffect(()=>{
        getDetails(anything)
        reposes(anything)
    },[anything])

    const getDetails = async (name) => {
        const res = await axios.get(`https://api.github.com/users/${name}`);
        setUser(res?.data);
    }
    const reposes = async (name) => {
        const res = await axios.get(`https://api.github.com/users/${name}/repos?per_page=5&sort=asc`);
        setRepose(res?.data)
    }
    // console.log(user)
    // console.log(repose)
    return(
        <>
        <Link to={'/'} className="btn btn-dark">Back to Search</Link>
        Hireable : {user.hireable?(<i class="fa fa-check text-success"></i>):(<i class="fa fa-times-circle text-danger"></i>)}
        
        <div className="card gride-2">
            <div className="all center">
                <img src={user.avatar_url} className="round-img" alt="" style={{width:"150px"}}/>
                <h1>{user.name}</h1>
                <p>Location : {user.location}</p>
            </div>
            <div>
                {user.bio && (
                    <>
                    <h3>Bio</h3>
                    <p>{user.bio}</p>
                    </>
                )}
                <a href={user.html_url} className="btn btn-dark my-1">Visit Github Profile</a>
                <ul>
                    <li>
                        {user.company && (
                            <>
                            <strong>company : {user.company}</strong>
                            </>
                        )}
                    </li>
                    <li>
                        {user.blog && (
                            <>
                            <strong>Website : {user.blog}</strong>
                            </>
                        )}
                    </li>
                    <li>
                        {user.login && (
                            <>
                            <strong>Username : {user.login}</strong>
                            </>
                        )}
                    </li>
                </ul>
            </div>
        </div>
        <div className="card text-center">
            <div className="badge badge-primary">Followers : {user.followers}</div>
            <div className="badge badge-success">Following : {user.following}</div>
            <div className="badge badge-danger">Public Repos : {user.public_repos}</div>
            <div className="badge badge-dark">Public Gists : {user.public_gists}</div>
        </div>
        <ReposeList repose={repose}/>
        </>
    )
}

export default UserDetails;