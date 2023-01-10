import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";

const RepoDetailPage=()=>
{
    const {name} = useParams();
    const {reponame} = useParams();
    const [repoDetail,setRepoDetail] = useState({})
    useEffect(()=>
    {
        fetch(`https://api.github.com/repos/${name}/${reponame}`,{
            
            headers: {
                Authorization: "Bearer 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"
            }
            
        })
        .then(res=>res.json())
        .then(res=>
            {
                console.log(res);
                setRepoDetail(res)
            })


    })

    return(
        <div>
            <h1 className="repodetail-h1">RepoDetail</h1>
            <div className="repoDetail">
                <p>Repo ID: {repoDetail.id}</p>
                <p>Repo Name: {repoDetail.name}</p>
            </div>
            
        </div>
    )
}
export default RepoDetailPage