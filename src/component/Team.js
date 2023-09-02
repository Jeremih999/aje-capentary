import React from "react";
import team from "../team";

const Team = () => {
    return (
        <div className="team-container">
            <h1>Meet Our Team</h1>
            <div className="team-grid">
                {team.map((team) => {
                    return (
                        <div>
                            <div className="img-cont" key={team.id}>
                                <img src={team.img} alt="team member" />
                            </div>
                            <h4>{team.name}</h4>
                            <p>{team.title}</p>
                        </div>
                    )
                })}
            </div>
        </div>
    )
}

export default Team