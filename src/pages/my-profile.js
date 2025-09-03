import { Context } from "@/component/context";
import UserProfileCard from "@/component/CustomerProfile";
import axios from "axios";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const Profile = () => {
  const { setOpenSignInModal } = useContext(Context);
  const [showCustomerProfile, setShowCustomerProfile] = useState(false);
  const [customer, setCustomer] = useState(null);
  const router = useRouter();

  const getCustomer = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getcustomer`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setShowCustomerProfile(true);
        setCustomer(res.data);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          router.push("/");
          setOpenSignInModal(true);
        } else {
          console.error("API error:", err.response.data || err.message);
        }
      } else {
        console.error("Unexpected error:", err.message);
      }
    }
  };

  useEffect(() => {
    getCustomer();
  }, []);

  return (
    <div className="container">
      {showCustomerProfile && (
        <UserProfileCard
          name={customer?.data?.fullname}
          email={customer?.data?.email}
        />
      )}
    </div>
  );
};

export default Profile;
