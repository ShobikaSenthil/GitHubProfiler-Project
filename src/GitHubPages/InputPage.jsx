import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import '../style.css'
const InputPage = () =>
{
    const [name,setName] = useState("");
    return(
        <div className="input-container">
            <h1>GitHub Profiler</h1>
            <h2>Search here Profiles...</h2>
            <input type="text" value={name} placeholder="Enter any profile to search" onChange={(e)=>setName(e.target.value)}/>
            <Link to={`/profile/${name}`}><button>Search</button></Link>
        </div>
    )
}
export default InputPage;