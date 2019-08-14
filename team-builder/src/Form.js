import React, { useState } from "react";

const Form = () => {
    const [user, setUser] = useState({name: "", email: "", role: ""});

    const handleChange = event => {
        setUser({...user, [event.target.name]: event.target.value});
    };

    const handleSubmit = event => {
        event.preventDefault();
        console.log(user.name);
        console.log(user.email);
        console.log(user.role);
    };

    return (
        <form onSubmit={event => handleSubmit(event)}>
            <label>
            Username:
            <input
                type="text"
                name="username"
                value={user.username}
                onChange={event => handleChange(event)}
            />
            </label>
            <label>
            Password:
            <input
                type="text"
                name="password"
                value={user.password}
                onChange={event => handleChange(event)}
            />
            </label>
            <button>Submit!</button>
        </form>
    );
};

export default Form;