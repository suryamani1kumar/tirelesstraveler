import { Context } from "@/component/context";
import PaypalPayment from "@/component/paypal/PaypalPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
import React, { useContext, useEffect, useState } from "react";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
};

const Checkout = () => {
  const router = useRouter()
  const [data, setData] = useState(null)
  const { setOpenSignInModal } = useContext(Context)


  const fetchData = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/getOrder`, {
        withCredentials: true,
      }

      );
      if (res.status === 200) {
        setShowCustomerProfile(true)
      }
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          router.push("/publication")
          setOpenSignInModal(true)
        } else {
          console.error("API error:", err.response.data || err.message);
        }
      } else {
        console.error("Unexpected error:", err.message);
      }
    }
  }

  useEffect(() => fetchData())

  return (
    <div className="container mx-auto px-4 pt-4">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> / <Link href="/publication">Publication</Link> / <span> THE TIRELESS TRAVELER</span>
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
          <p>Product Type: EBOOK</p>
          <div>
            <PayPalScriptProvider options={initialOptions}>
              <PaypalPayment buyitems={[]} />
            </PayPalScriptProvider>
          </div>
        </div>

      </div>
    </div>
  );
};

export default Checkout;
