import PaypalPayment from "@/component/paypal/PaypalPayment";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";
import Image from "next/image";
import Link from "next/link";
import React from "react";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
};

const Checkout = () => {
  return (
    <div className="container mx-auto px-4">
      <nav className="breadcrumb">
        <Link href="/">Home</Link> / <span> THE TIRELESS TRAVELER</span>
      </nav>
      <div className="checkoutContainer">
        <div>
          <Image
            src={"/images/book-box-cover.webp"}
            alt={"book-box-cover"}
            width={250}
            height={250}
          />
        </div>
        <div>
          <p>Product Type: EBOOK</p>
        </div>
        <div>
          <PayPalScriptProvider options={initialOptions}>
            <PaypalPayment buyitems={[]} />
          </PayPalScriptProvider>
        </div>
      </div>
    </div>
  );
};

export default Checkout;
