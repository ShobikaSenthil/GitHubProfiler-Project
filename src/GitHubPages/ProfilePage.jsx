import React from "react";
import { useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import "../style.css"

const ProfilePage =()=>
{
    const {name} = useParams();

    const [userDetail,setUserDetail] = useState({})
    const [repos,setRepos] = useState([]) 
    const [userInfo,setUserInfo] = useState({})


    useEffect(()=>{
        fetch(`https://api.github.com/users/${name}/repos`,
        {
            headers: {
                Authorization: "Bearer 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"
            }
        })

        .then(res=>res.json())
        .then(res=>{console.log(res);
                    setUserDetail({
                        username: res[0].owner.login,
                        image:    res[0].owner.avatar_url,
                    })
                    setRepos(res)
        }
        );
        fetch(`https://api.github.com/users/${name}`,
        {
            headers: {
                Authorization: "Bearer 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"
            
        }
        })

        .then(res=>res.json())
        .then(res=>{console.log(res);
                    setUserInfo({
                        bio:res.bio,
                        followers:res.followers,
                        following:res.following
                    })
        }
        );
    },[name])
    
    return(
        <div>
            <div className="profile-left">
            <img className="profile-image" src={userDetail.image} height="280px" width="300px"></img>
            <h1 className="username">{userDetail.username}</h1>
            <button className="follower-button">Follow</button>
            <p>{userInfo.bio}</p>
            <p className="followers-color">Followers: <Link to={`/followers/${name}`}>{userInfo.followers}</Link></p>
            <p>Following: {userInfo.following}</p>
            
            </div>
            <div className="profile-right">
                <div className="right-container">
                    <h1>Repos</h1>
                    {
                        repos.map((item)=>
                        {
                            return(
                                <Link to={`/${name}/repodetail/${item.name}`}>
                                <div className="repoCard" key={item.id}>
                                    <h2 className="reponame">{item.name} </h2>
                                </div>
                                </Link>
                            )
                        })
                    }
            </div>
            </div>
            
        </div>
    )
}
export default ProfilePage