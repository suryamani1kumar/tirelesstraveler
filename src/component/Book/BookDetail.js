import React, { useState } from "react";
import styles from "./book.module.scss";
import Link from "next/link";
import { Tabs, Tab } from "react-bootstrap";
import Image from "next/image";

const BookDetail = () => {
  return (
    <div className={styles.bookDetailContainer}>
      <nav className={styles.breadcrumb}>
        <Link href="/">Home</Link> / <span>Comprehensive Guide...</span>
      </nav>

      <div className={styles.bookMain}>
        <div className={styles.bookImage}>
          <Image
            src="/images/book-box-cover.webp" // Place this image in your public folder or use an online URL
            alt="Comprehensive Guide to IBC"
            width={0}
            height={300}
          />
          <a href="#" className={styles.sampleLink}>
            Sample
          </a>
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
            Price <strong>$ 49.00</strong>
          </p>
          <div className={styles.ebookOptions}>
            <button className={styles.activeTab}>EBOOK (EPUB)</button>
            <button>EBOOK (PDF)</button>
            <button>Buy Now</button>
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
              extends beyond Earth. Whether navigating polar extremes or
              capturing cultural landscapes, his adventures highlight the
              resilience of humanity and the boundless wonders of our world.
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
    </div>
  );
};

export default BookDetail;
