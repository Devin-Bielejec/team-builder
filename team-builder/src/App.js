import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Form";
import ShowTeam from "./ShowTeam";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
    console.log("are we here");
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember}/>
      <div className="teamMembers">
        <ShowTeam teamMembers={teamMembers} />
      </div>
    </div>
  );
}

export default App;
