import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import '../style.css'

const FollowerPage = () =>
{
    const {name} = useParams();
    const [followers,setFollowers] = useState([])

    useEffect(()=>
    {
        fetch(`https://api.github.com/users/${name}/followers`,
        {
            headers: {
                Authorization: "Bearer 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"
            }
        }
        )
        .then(res=>res.json())
        .then(res=>
            {console.log(res);
            setFollowers(res)
            })
    },[name])

    return(
        
        <div>
            
            <h1>
                Followers
            </h1>
            <div className="follower">
            {
                followers.map((item)=>
                {
                    return(
                    <div className="follower-item" key={item.id}>
                    <>
                        <div className="follower1">
                            <img className="follower-img" src={item.avatar_url} height="70" width="70"></img>
                            <p className="follower-name">{item.login}</p>
                            <Link to={`/profile/${item.login}`}><button className="follower-about">About</button></Link>
                        </div>
                        {/* <div className="follower2">
                        <Link to={`/profile/${item.login}`}><button className="follower-about">About</button></Link>
                        </div> */}
                    </>
                    </div> 
                    )
                })
            }
            </div>
           
        </div>
    )
}
export default FollowerPage