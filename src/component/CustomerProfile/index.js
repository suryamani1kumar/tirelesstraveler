import React from "react";
import "./UserProfileCard.scss";

export default function UserProfileCard({ name, email }) {
    return (
        <div className={`user_card`}>
            <div className="user_card__avatar">
                <img
                    src={`/images/customer_profile.png`}
                    alt={`avatar`}
                />
            </div>

            <div className="user_card__info">
                <span className="user_card__name">{name}</span>
                <span className="user_card__email">{email}</span>
            </div>
        </div>
    );
}


