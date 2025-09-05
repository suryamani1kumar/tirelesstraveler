import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";

const CancelPayment = () => {
  return (
    <div className="container mx-auto px-4">
      <h1>CancelPayment</h1>

      <FontAwesomeIcon icon={faCircleXmark} className="text-red-500 text-5xl" />
    </div>
  );
};

export default CancelPayment;
