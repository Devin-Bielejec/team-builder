import React, { useState } from "react";

const Role = (props) => {
    const roleTypes = ['Backend engineer', 'frontend engineer', 'designer'];

    return (
        <div className="Role">
            {roleTypes.map(itemRole => {
                <p>{itemRole}</p>
            })}
        </div>        
    );
};

export default Role;

const formRole = (props) => {
    return (
        <label>
        {props.RoleWritten}
        <input
            type="text"
            name="role"
            value={props.user.role}
            onChange={event => props.handleChange(event)}
        />
        </label>
    )
}