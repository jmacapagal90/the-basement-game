import React from "react";
import { Transition } from 'semantic-ui-react';


function UserScorecard({username,points,summary,updated_at}){
    const date = new Date(updated_at)
    return (
            <div class="ui centered card">
                <div class="content">
                    <div class="center aligned header">@{username}:</div>  
                    <div class="center aligned header">{summary}</div> 
                    <div class="description"><b>{points}pts</b></div> 
                    <div class="description">{date.toLocaleString()}</div>
                    <div class="description">
                        <i><b>+Sponsored by TwitchBlade</b></i>
                    </div> 
                </div>
            </div>
    )
}

export default UserScorecard;