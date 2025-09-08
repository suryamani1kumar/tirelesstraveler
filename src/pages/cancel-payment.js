import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

const FailedPayment = () => {
  const router = useRouter();
  const [getOrderData, setGetOrderData] = useState(null);

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
      if (err.response?.status === 401) {
        router.push("/");
      } else {
        console.error("API error:", err.message);
      }
    }
  };

  useEffect(() => {
    if (router.query.id) {
      fetchData();
    }
  }, [router.query.id]);

  if (!getOrderData) {
    return <div className="text-center mt-5">Loading...</div>;
  }

  return (
    <div className="container d-flex justify-content-center py-2 align-items-center min-vh-100">
      <div className="card shadow-lg border-0 rounded-4 w-100">
        <div className="card-body text-center p-5">
          {/* Failure Icon */}
          <div className="mb-4">
            <div
              className="bg-danger bg-opacity-10 text-danger rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{ width: "70px", height: "70px", fontSize: "2rem" }}
            >
              <FontAwesomeIcon icon={faCircleXmark} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-danger fw-bold">Payment Failed!</h2>
          <h4 className="text-muted mb-3">
            Sorry! Your payment of{" "}
            <span className="fw-semibold">{getOrderData?.totalAmount}$</span>{" "}
            could not be processed.
          </h4>

          {/* Order Info */}
          <div className="small text-secondary mb-4 text-start">
            <p>
              <strong>Status:</strong> {getOrderData?.paymentStatus || "Failed"}
            </p>
            <p>
              <strong>Order ID:</strong>{" "}
              {getOrderData?.payment?.paypalOrderId || "---"}
            </p>
            <p>
              <strong>Transaction ID:</strong>{" "}
              {getOrderData?.payment?.captureId || "---"}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {getOrderData?.createdAt
                ? new Date(getOrderData.createdAt).toLocaleString()
                : "---"}
            </p>
          </div>

          {/* Product Details */}
          <div className="row mt-4 align-items-center">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <Image
                src="/images/book-box-cover.webp"
                alt="Book Cover"
                width={250}
                height={250}
              />
            </div>
            <div className="col-md-7">
              <div className="p-3 border rounded-3 bg-light text-start">
                {getOrderData?.products?.map((item, i) => (
                  <div key={i} className="mb-3">
                    <p className="mb-1">
                      <strong>Book Name:</strong> THE TIRELESS TRAVELER
                    </p>
                    <p className="mb-1">
                      <strong>Book Type:</strong> {item.bookType}
                    </p>
                    <p className="mb-0">
                      <strong>Quantity:</strong> {item.quantity}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Retry / Navigation Buttons */}
          <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link
              href={`/checkout?id=${getOrderData?._id}`}
              className="btn btn-danger btn-lg px-4"
            >
              Retry Payment
            </Link>
            <Link
              href="/publication"
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Back to Store
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FailedPayment;
