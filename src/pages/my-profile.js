import { Context } from "@/component/context";
import UserProfileCard from "@/component/CustomerProfile";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
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
    <div className="container py-4">
      {showCustomerProfile && (
        <div className="d-flex  gap-5">
          <UserProfileCard
            name={customer?.data?.user?.fullname}
            email={customer?.data?.user?.email}
          />
          {customer?.data?.orders && (
            <div>
              <h2>My Order</h2>
              <table className="table-auto border-collapse border border-gray-400 w-full">
                <thead>
                  <tr className="bg-gray-200">
                    <th className="border border-gray-400 px-4 py-2">
                      Book Img
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Book Type
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Quantity
                    </th>
                    <th className="border border-gray-400 px-4 py-2">Price</th>
                    <th className="border border-gray-400 px-4 py-2">
                      PaymentStatus
                    </th>
                    <th className="border border-gray-400 px-4 py-2">
                      Read Book
                    </th>
                  </tr>
                </thead>
                {customer?.data?.orders.map((item) => {
                  return (
                    <tbody key={item._id}>
                      {item.products.map((book, index) => (
                        <tr key={index}>
                          <td className="border border-gray-400 px-4 py-2">
                            <Image
                              src={"/images/book-box-cover.webp"}
                              height={40}
                              width={80}
                            />
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {book.bookType}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {book.quantity}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {book.price}$
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {item.paymentStatus}
                          </td>
                          <td className="border border-gray-400 px-4 py-2">
                            {item.paymentStatus === "COMPLETED" &&
                            book.bookType === "eBook" ? (
                              <Link
                                href={
                                  "/flip-book/the-tireless-traveler-ebook.html"
                                }
                              >
                                Read
                              </Link>
                            ) : (
                              "---"
                            )}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  );
                })}
              </table>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Profile;
