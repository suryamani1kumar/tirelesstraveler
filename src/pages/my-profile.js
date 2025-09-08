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
        { withCredentials: true }
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
        <div className="row g-4">
          {/* Profile Card */}
          <div className="col-12 col-lg-4">
            <UserProfileCard
              name={customer?.data?.user?.fullname}
              email={customer?.data?.user?.email}
            />
          </div>

          {/* Orders Table */}
          <div className="col-12 col-lg-8 py-4">
            <div className="card shadow-sm">
              <div className="card-body">
                <h3 className="h5 mb-3">My Orders</h3>
                {customer?.data?.orders?.length > 0 ? (
                  <div className="table-responsive">
                    <table className="table align-middle">
                      <thead className="table-dark">
                        <tr>
                          <th scope="col">Book</th>
                          <th scope="col">Type</th>
                          <th scope="col">Quantity</th>
                          <th scope="col">Price</th>
                          <th scope="col">Status</th>
                          <th scope="col">Action</th>
                        </tr>
                      </thead>
                      <tbody>
                        {customer?.data?.orders.map((order) =>
                          order.products.map((book, index) => (
                            <tr key={order._id + index}>
                              <td>
                                <Image
                                  src="/images/book-box-cover.webp"
                                  alt="Book Cover"
                                  height={40}
                                  width={60}
                                />
                              </td>
                              <td>{book.bookType}</td>
                              <td>{book.quantity}</td>
                              <td>${book.price}</td>
                              <td>
                                <span
                                  className={`badge ${
                                    order.paymentStatus === "COMPLETED"
                                      ? "bg-success"
                                      : "bg-warning text-dark"
                                  }`}
                                >
                                  {order.paymentStatus}
                                </span>
                              </td>
                              <td>
                                {order.paymentStatus === "COMPLETED" &&
                                book.bookType === "eBook" ? (
                                  <Link
                                    href="/flip-book/the-tireless-traveler-ebook.html"
                                    className="btn btn-sm btn-primary"
                                  >
                                    Read
                                  </Link>
                                ) : (
                                  <span className="text-muted">---</span>
                                )}
                              </td>
                            </tr>
                          ))
                        )}
                      </tbody>
                    </table>
                  </div>
                ) : (
                  <p className="text-muted">No orders found.</p>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Profile;
