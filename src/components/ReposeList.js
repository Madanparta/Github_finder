import React from "react";
import "../index.css";

const ReposeList = ({repose}) => {
    console.log(repose)
    return(
        <>
        {repose.map((res)=>(
            <div key={res.id} className="card">
                <h3><a href={res.html_url}>{res.name}</a></h3>
            </div>
        ))}
        </>
    )
}

export default ReposeList;