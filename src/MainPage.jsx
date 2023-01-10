import React from "react";
import {Routes,Route} from "react-router-dom"
import InputPage from "./GitHubPages/InputPage";
import ProfilePage from "./GitHubPages/ProfilePage";
import FollowerPage from "./GitHubPages/FollowerPage";
import RepoDetailPage from "./GitHubPages/RepoDetailPage";
import './style.css'

const MainPage = () =>
{
    return(
        <div>
            <Routes>
                <Route path="/" element={<InputPage/>}></Route>
                <Route path="/profile/:name" caseSensitive={true} element={<ProfilePage/>}></Route>
                <Route path="/followers/:name" element={<FollowerPage/>}></Route>
                <Route path="/:name/repodetail/:reponame" element={<RepoDetailPage/>}></Route>
            </Routes>
        </div>
    )
}

export default MainPage