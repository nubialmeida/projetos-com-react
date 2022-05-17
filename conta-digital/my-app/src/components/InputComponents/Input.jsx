import React from "react";

export default function InputComponent(props) {
    return (
        <div className="input">
            <input
                id={props.id}
                type={props.type}
                placeholder={props.placeholder}
                onChange={props.onChange}
                required
                autocomplete="off"
                className="input-area"
            />
            <label>{props.description}</label>
        </div>
    );
}
