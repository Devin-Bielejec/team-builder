import React from "react";

const ShowTeam = (props) => {
    console.log(props.teamMembers);
    const teamArray = props.teamMembers;

    return (
        <div>
            <h1>Members!</h1>
            {teamArray.map( (member) => 
                <p>{member.name}</p>
            )}
        </div>
    )
}

export default ShowTeam;