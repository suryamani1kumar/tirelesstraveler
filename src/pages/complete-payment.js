import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleCheck } from "@fortawesome/free-solid-svg-icons";
import { useRouter } from "next/router";
import axios from "axios";

const CompletePayment = () => {
  const router = useRouter();
  const [getOrderData, setGetOrderData] = useState(null);

  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getOrder?orderId=${router.query.id}`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        setGetOrderData(res.data.data);
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          router.push("/");
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

  return (
    <div className="container mx-auto p-4 text-center">
      <h1>
        <FontAwesomeIcon
          icon={faCircleCheck}
          className="text-green-500 text-5xl"
        />
        <span className="text-green-500">Payment Successful !</span>
      </h1>
      <h3>
        Thank you! Your payment of {getOrderData?.totalAmount}$ has been
        received
      </h3>
      <h5>
        Order ID : {getOrderData?.payment?.paypalOrderId} | Transactions ID :{" "}
        {getOrderData?.payment?.captureId}
      </h5>
      <h4>Payment Details</h4>
      <Link href={"/flip-book/the-tireless-traveler-ebook.html"}>view pdf</Link>
    </div>
  );
};

export default CompletePayment;
