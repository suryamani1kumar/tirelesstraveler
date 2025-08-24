import React from "react";
import { PayPalButtons, usePayPalScriptReducer } from "@paypal/react-paypal-js";
import { useRouter } from "next/router";
import axios from "axios";

const styles = {
  shape: "rect",
  layout: "vertical",
  height: 35,
};
const PaypalPayment = ({ buyitems }) => {
  const router = useRouter();
  const [{ isPending }] = usePayPalScriptReducer();

  const oncreateOrder = async () => {
    const bodyData = Object.entries(buyitems)
      .filter(
        ([_, value]) => value !== undefined && value !== null && value !== ""
      )
      .map(([key, value]) => ({
        productType: key,
        productPrice: value,
      }));
    try {
      const { data } = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/createPaypalOrder`,
        bodyData
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
    <>
      {isPending && (
        <button
          disabled
          style={{
            width: "100%",
            height: "45px",
            background: "#ccc",
            border: "none",
            borderRadius: "5px",
            cursor: "not-allowed",
          }}
        >
          Loading PayPal…
        </button>
      )}
      <PayPalButtons
        style={styles}
        createOrder={oncreateOrder}
        onApprove={onApprove}
        onError={onError}
      />
    </>
  );
};

export default PaypalPayment;
