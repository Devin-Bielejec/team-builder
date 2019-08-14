import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';

import Form from "./Form";

function App() {
  const [teamMembers, setTeamMembers] = useState([]);

  const addTeamMember = member => {
    setTeamMembers([...teamMembers, member]);
  }

  return (
    <div className="App">
      <Form addTeamMember={addTeamMember}/>
    </div>
  );
}

export default App;
