import Link from "next/link";
import React from "react";

const CompletePayment = () => {
  return (
    <div className="container mx-auto px-4">
      <h1>CompletePayment</h1>
      <h3>
        <Link href={"/flip-book/the-tireless-traveler-ebook.html"}>
          view pdf
        </Link>
      </h3>
    </div>
  );
};

export default CompletePayment;
