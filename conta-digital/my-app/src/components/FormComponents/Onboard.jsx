import React from "react";

export default function OnboardComponent(props) {
    return (
        <div>
            <div className="bank-account">
                <img src={props.src} alt="user" className="user" />
                <span>{props.name}</span>
                <span>{props.numberAccount}</span>
                <span>{props.agency}</span>
                <span>{props.institute}</span>
                <span>{props.bank}</span>
            </div>

            <div className="more-info">
                <span>{props.phone}</span>
                <span>{props.email}</span>
                <span>{props.income}</span>
            </div>
        </div>
    );
}
