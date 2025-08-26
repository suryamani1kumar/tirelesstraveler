import UserProfileCard from "@/component/CustomerProfile";
import React from "react";

const Profile = () => {
  return (
    <div className="container">
      <UserProfileCard
        name="Suryamani Kumar"
        email="suryamani@example.com"
      />
    </div>
  );
};

export default Profile;
