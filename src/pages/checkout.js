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
  {
    ssr: false,
  }
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

  console.log("getOrderData", getOrderData);

  return (
    <div className="container mx-auto px-4 pt-4">
      <nav className="breadcrumb">
        <Link href="/">Home&nbsp;</Link> /{" "}
        <Link href="/publication">Publication&nbsp;</Link> /{" "}
        <span> THE TIRELESS TRAVELER</span>
      </nav>
      <div className="checkoutContainer">
        <div>
          <Image
            src={"/images/book-box-cover.webp"}
            alt={"book-box-cover"}
            width={300}
            height={300}
          />
        </div>
        <div>
          {getOrderData?.products?.map((item) => (
            <div key={item.bookType}>
              <p>Book Name: THE TIRELESS TRAVELER</p>
              <p>Book Type: {item.bookType}</p>
              <p>Price: {item.price} $</p>
              <p>Quantity: {item.quantity}</p>
            </div>
          ))}

          <div>
            <PayPalScriptProvider options={initialOptions}>
              <PaypalPayment OrderData={getOrderData} />
            </PayPalScriptProvider>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
