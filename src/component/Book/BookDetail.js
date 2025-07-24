import React, { useState } from "react";
import styles from "./book.module.scss";
import Link from "next/link";
import { Tabs, Tab } from "react-bootstrap";
import Image from "next/image";
import dynamic from "next/dynamic";

// Load flipbook component on client only
// const FlipBookPDF = dynamic(() => import("../pdf"), {
//   ssr: false,
// });

const BookDetail = () => {
   const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: "Publiction", // Or a custom title
          text: "Check out this awesome page!", // Or custom text
          url: "https://www.google.com/", // The URL to share
        });
        console.log("Content shared successfully");
      } catch (error) {
        console.error("Error sharing:", error);
      }
    } else {
      // Fallback for browsers that don't support Web Share API
      alert(
        "Web Share API is not supported in this browser. You can manually copy the URL."
      );
    }
  };
  return (
    <div className={styles.bookDetailContainer}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <span>THE TIRELESS TRAVELER</span>
      </nav>

      <div className={styles.bookMain}>
        <div className={styles.bookImage}>
          <Image
            src="/images/book-box-cover.webp" // Place this image in your public folder or use an online URL
            alt="Comprehensive Guide to IBC"
            width={0}
            height={300}
          />
        </div>

        <div className={styles.bookInfo}>
          <h2>THE TIRELESS TRAVELER</h2>
          <p>
            <strong>Author(s):</strong> Arvinder Singh Bahal (Arvi)
          </p>
          Email:{" "}
          <Link href={"mailto:arvibahal@gmail.com"}>arvibahal@gmail.com</Link>
          <p></p>
          <p>
            Price <strong>$ 50.00</strong>
          </p>
            <button onClick={handleShare}>Share Page</button>
          <div className={styles.ebookOptions}>
            <button className={styles.activeTab}>EBOOK (PDF)</button>
            <button>Buy Now</button>
            {/* <form
              action="https://www.paypal.com/cgi-bin/webscr"
              method="post"
              target="_blank"
            >
              <input type="hidden" name="cmd" value="_xclick" />
              <input
                type="hidden"
                name="business"
                value="arvibahal@comcast.net"
              />
              <input type="hidden" name="item_name" value="tirelesstraveler" />
              <input type="hidden" name="amount" value="1.00" />
              <input type="hidden" name="currency_code" value="USD" />

              <input
                type="image"
                src="https://www.paypalobjects.com/en_US/i/btn/btn_buynow_LG.gif"
                border="0"
                name="submit"
                alt="PayPal - The safer, easier way to pay online!"
              />
            </form> */}
          </div>
        </div>
      </div>
      <Tabs defaultActiveKey="Product Description">
        <Tab eventKey="Product Description" title="About Author">
          <p>
            Arvi Singh Bahal’s journey reflects an unrelenting wanderlust and
            entrepreneurial drive. From immigrating to the U.S. in the 1970s
            with just $108 to building successful businesses in apparel and real
            estate, he transformed work-related travel into a lifelong quest.
            Visiting all 193 UN countries by 2023, he has explored over two
            hundred territories using diverse modes, from freight trains to dog
            sleds, accumulating over three million miles of travel.
          </p>

          <p>
            A passionate photographer with an archive of one million images,
            Arvi documents both iconic landmarks and hidden gems. As “Future
            Astronaut No. 326” with Virgin Galactic, his spirit of exploration
            extends beyond Earth. Whether navigating polar extremes or capturing
            cultural landscapes, his adventures highlight the resilience of
            humanity and the boundless wonders of our world.
          </p>
        </Tab>
        <Tab eventKey="Table of Contents" title="About Book">
          <p style={{ padding: "10px" }}>
            A passionate photographer with an archive of one million images,
            Arvi documents both iconic landmarks and hidden gems. As “Future
            Astronaut No. 326” with Virgin Galactic, his spirit of exploration
            extends beyond Earth. Whether navigating polar extremes or capturing
            cultural landscapes, his adventures highlight the resilience of
            humanity and the boundless wonders of our world.
          </p>
        </Tab>
        <Tab eventKey="visual" title="Visual">
          <video
            width="100%"
            controls
            autoplay
            poster="/images/book-box-cover.webp"
          >
            <source src="/images/book_video.mp4" type="video/mp4" />
          </video>
        </Tab>
      </Tabs>
      
      {/* <FlipBookPDF url="/images/suryamani_kumar_cv_july_2025.pdf" /> */}
    </div>
  );
};

export default BookDetail;
