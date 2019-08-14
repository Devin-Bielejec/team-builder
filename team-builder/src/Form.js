import React, { useState } from "react";

const Form = (props) => {
    const [user, setUser] = useState({ name: "", email: "", role: ""});

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value });
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(props);
        props.addTeamMember(user);
        console.log(props);
    };

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>
            Name:
            <input
                type="text"
                name="name"
                value={user.name}
                onChange={event => handleChange(event)}
            />
            </label>

            <label>
            Role:
            <input
                type="text"
                name="role"
                value={user.role}
                onChange={event => handleChange(event)}
            />
            </label>

            <label>
            Email:
            <input
                type="text"
                name="email"
                value={user.email}
                onChange={event => handleChange(event)}
            />
            </label>
            <button>Submit!</button>
        </form>
    );
};

export default Form;