import React from "react";
import styles from "./UserProfileCard.module.scss";

export default function UserProfileCard({ name, email }) {
    return (
        <div className={styles.user_card}>
            <div className={styles.user_card__avatar}>
                <img
                    src={`/images/customer_profile.png`}
                    alt={`avatar`}
                />
            </div>

            <div className={styles.user_card__info}>
                <span className={styles.user_card__name}>{name}</span>
                <span className={styles.user_card__email}>{email}</span>
            </div>
        </div>
    );
}


