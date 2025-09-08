import { Context } from "@/component/context";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";
import dynamic from "next/dynamic";

const PaypalPayment = dynamic(
  () => import("@/component/paypal/PaypalPayment"),
  { ssr: false }
);

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
};

const Checkout = () => {
  const router = useRouter();
  const [getOrderData, setGetOrderData] = useState(null);
  const { setOpenSignInModal } = useContext(Context);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getOrder?orderId=${router.query.id}`,
        { withCredentials: true }
      );
      if (res.status === 200) {
        setGetOrderData(res.data.data);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          router.push("/publication");
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
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  // Calculate total
  const totalPrice = getOrderData?.products?.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="container py-3">
      {/* Breadcrumb */}
      <nav aria-label="breadcrumb" className="mb-4">
        <ol className="breadcrumb">
          <li className="breadcrumb-item">
            <Link href="/">Home</Link>
          </li>
          <li className="breadcrumb-item">
            <Link href="/publication">Publication</Link>
          </li>
          <li className="breadcrumb-item active" aria-current="page">
            THE TIRELESS TRAVELER
          </li>
        </ol>
      </nav>

      <div className="row g-4">
        {/* Book Image */}
        <div className="col-12 col-md-5">
          <Image
            src="/images/book-box-cover.webp"
            alt="book-box-cover"
            width={350}
            height={350}
          />
        </div>

        {/* Order Summary */}
        <div className="col-12 col-md-6">
          <div className="card shadow-sm h-100">
            <div className="card-body d-flex flex-column">
              <h2 className="h4 mb-3">Order Summary</h2>

              {getOrderData?.products?.map((item) => (
                <div key={item.bookType} className="mb-3 pb-3 border-bottom">
                  <h5 className="mb-2"> THE TIRELESS TRAVELER</h5>

                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Book Type:</span>
                    <span>{item.bookType}</span>
                  </div>

                  <div className="d-flex justify-content-between">
                    <span className="text-muted">Quantity:</span>
                    <span>{item.quantity}</span>
                  </div>

                  <div className="d-flex justify-content-between mt-2">
                    <span className="fw-bold">Price:</span>
                    <span className="fw-bold">${item.price}</span>
                  </div>
                </div>
              ))}

              {/* Total Price */}
              {totalPrice > 0 && (
                <div className="d-flex justify-content-between align-items-center mt-3">
                  <h5 className="mb-0">Total</h5>
                  <h5 className="mb-0 fw-bold">${totalPrice.toFixed(2)}</h5>
                </div>
              )}

              {/* Payment Section */}
              <div className="mt-4">
                <h5 className="mb-3">Secure Payment</h5>
                <PayPalScriptProvider options={initialOptions}>
                  <PaypalPayment OrderData={getOrderData} />
                </PayPalScriptProvider>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
