import React from "react";


function UserScorecard({username,points,summary,updated_at}){
    
    return (
        <div class="ui fluid card">
            <div class="content">
                <div class="header">@{username}</div> 
                <div class="header">{summary}</div> 
                <div class="description">Points: {points}</div> 
                <div class="description">{updated_at}</div>
                <div class="description">Sponsored by TwitchBlade</div> 
            </div>
        </div>
    )
}

export default UserScorecard;