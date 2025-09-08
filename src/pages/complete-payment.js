import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import axios from "axios";
import Image from "next/image";

const CompletePayment = () => {
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
  console.log("getOrderData", getOrderData.totalAmount);
  return (
    <div className="container d-flex justify-content-center py-2 align-items-center min-vh-100">
      <div className="card shadow-lg border-0 rounded-4 w-100">
        <div className="card-body text-center p-5">
          {/* Success Icon */}
          <div className="mb-4">
            <div
              className="bg-success bg-opacity-10 text-success rounded-circle d-flex justify-content-center align-items-center mx-auto"
              style={{ width: "70px", height: "70px", fontSize: "2rem" }}
            >
              <FontAwesomeIcon icon={faCircleCheck} />
            </div>
          </div>

          {/* Heading */}
          <h2 className="text-success fw-bold">Payment Successful!</h2>
          <h4 className="text-muted mb-3">
            Thank you! Your payment of{" "}
            <span className="fw-semibold">{getOrderData?.totalAmount}$</span>{" "}
            has been received.
          </h4>

          {/* Order Info */}
          <div className="small text-secondary mb-4 checkoutContainer">
            <p>
              <strong>Status:</strong> {getOrderData?.paymentStatus}
            </p>
            <p>
              <strong>Order ID:</strong> {getOrderData?.payment?.paypalOrderId}
            </p>
            <p>
              <strong>Transaction ID:</strong>{" "}
              {getOrderData?.payment?.captureId}
            </p>
            <p>
              <strong>Date:</strong>{" "}
              {new Date(getOrderData?.createdAt).toLocaleString()}
            </p>
          </div>
          {/* Payer Info */}
          <div className="mt-4 text-start">
            <h5 className="fw-bold">Payer Information</h5>
            <div className="table-responsive">
              <table className="table table-sm table-bordered">
                <tbody>
                  <tr>
                    <th scope="row">Name</th>
                    <td>{getOrderData?.payment?.payer?.name}</td>
                  </tr>
                  <tr>
                    <th scope="row">Email</th>
                    <td>{getOrderData?.payment?.payer?.email}</td>
                  </tr>
                  <tr>
                    <th scope="row">Payer ID</th>
                    <td>{getOrderData?.payment?.payer?.payerId}</td>
                  </tr>
                  <tr>
                    <th scope="row">Country</th>
                    <td>{getOrderData?.payment?.payer?.country}</td>
                  </tr>
                </tbody>
              </table>{" "}
            </div>
          </div>
          {/* Product Details */}
          <div className="row mt-4 align-items-center">
            <div className="col-md-5 text-center mb-3 mb-md-0">
              <Image
                src="/images/book-box-cover.webp"
                alt="Book Cover"
                width={250}
                height={250}
                // className="img-fluid rounded shadow-sm"
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

          {/* Payment Breakdown */}
          <div className="mt-4 text-start">
            <h5 className="fw-bold">Payment Details</h5>
            <table className="table table-sm table-bordered">
              <tbody>
                <tr>
                  <th scope="row">Net Amount</th>
                  <td>
                    {getOrderData.totalAmount}{" "}
                    {getOrderData?.payment?.amount?.currency}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Buttons */}
          <div className="mt-4 d-flex flex-column flex-sm-row gap-3 justify-content-center">
            <Link
              href={"/flip-book/the-tireless-traveler-ebook.html"}
              className="btn btn-success btn-lg px-4"
            >
              View PDF
            </Link>
            <Link
              href={"/my-profile"}
              className="btn btn-outline-secondary btn-lg px-4"
            >
              Later Read
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CompletePayment;
