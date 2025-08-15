import React from "react";
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import axios from "axios";

const initialOptions = {
  clientId: process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID,
};
const styles = {
  shape: "rect",
  layout: "vertical",
  height: 35,
};
const PaypalPayment = () => {
  const router = useRouter();
  const oncreateOrder = async () => {
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/createorder`
      );
      return data.orderId;
    } catch (error) {
      console.error("Error create order By paypal:", error.message);
      throw error;
    }
  };

  const onApprove = async (getdata) => {
    try {
      if (!getdata.orderID) {
        throw new Error("Invalid order id");
      }
      const { data } = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/captaurepayment/${getdata.orderID}`
      );
      router.push("/complete-payment");
    } catch (error) {
      console.error("paypal Error", error);
      router.push("/cancel-payment");
    }
  };

  const onError = (error) => {
    console.error("paypal Error", error);
    router.push("/cancel-payment");
  };
  
  return (
    <PayPalScriptProvider options={initialOptions}>
      <PayPalButtons
        style={styles}
        createOrder={oncreateOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </PayPalScriptProvider>
  );
};

export default PaypalPayment;
