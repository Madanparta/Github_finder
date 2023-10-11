import React from "react";
import UserItem from "./UserItem";

const Users = ({users}) => {
    // console.log(props.users)
    return(
        <div style={userStyle}>
        {users.map((res)=>(
            <UserItem key={res.id} profile={res.avatar_url} name={res.login} />
        ))}
        </div>
    )
}

const userStyle = {
    display:"grid",
    gridTemplateColumns:"repeat(3,1fr)",
    gridGap:"1rem"
}
export default Users;