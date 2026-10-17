
import React, { useContext, useState } from "react";
import styles from "./book.module.scss";
import Link from "next/link";
import Image from "next/image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import {
  faFacebook,
  faLinkedin,
  faInstagram,
} from "@fortawesome/free-brands-svg-icons";

import {
  faShareNodes,
  faCheck,
  faBookOpen,
  faShieldHalved,
} from "@fortawesome/free-solid-svg-icons";

import { useRouter } from "next/router";
import axios from "axios";
import { Context } from "../context";

const images = [
  "/images/MY_PLAYNET_MY_PLAYGROUND_COVER.jpg",
  "/images/My_Planet My_Playground_FRONT.jpg",
  "/images/02_Banner.jpg",
];

const PlaygroundDetail = () => {
  const router = useRouter();

  const [imageChange, setImageChange] = useState(images[0]);

  const [buyitems, setBuyItems] = useState({
    eBook: "35.00",
    hardcover: "",
  });

  const [loading, setLoading] = useState(false);

  const { setOpenSignInModal } = useContext(Context);

  // Share publication
  const handleShare = async () => {
    const shareData = {
      title: "My Planet My Playground",
      text:
        "Discover the extraordinary adventures of Arvinder (Arvi) Singh Bahal in My Planet My Playground.",
      url: "https://www.tirelesstraveler.net/publication",
    };

    try {
      if (navigator.share) {
        await navigator.share(shareData);
      } else {
        await navigator.clipboard.writeText(shareData.url);
        alert("Book link copied!");
      }
    } catch (error) {
      if (error.name !== "AbortError") {
        console.error("Unable to share:", error);
      }
    }
  };

  // Select or deselect book formats
  const handleBuyItem = (e) => {
    const { name, value, checked } = e.target;

    setBuyItems((prev) => ({
      ...prev,
      [name]: checked ? value : "",
    }));
  };

  // Create order
  const createOrder = async () => {
    const products = Object.entries(buyitems)
      .filter(([, price]) => price !== "")
      .map(([bookType, price]) => ({
        bookType,
        price,
        quantity: 1,
      }));

    if (!products.length) {
      alert("Please select a book format before continuing.");
      return;
    }

    if (!process.env.NEXT_PUBLIC_API_URL) {
      alert("API configuration is missing. Please try again later.");
      return;
    }

    setLoading(true);

    try {
      const response = await axios.post(
        `${process.env.NEXT_PUBLIC_API_URL}/createOrder`,
        { products },
        { withCredentials: true }
      );

      if (response.status === 201 && response.data?.data) {
        router.push(`/checkout?id=${encodeURIComponent(response.data.data)}`);
      } else {
        alert("Unable to create your order. Please try again.");
      }
    } catch (error) {
      if (error.response?.status === 401) {
        setOpenSignInModal(true);
      } else {
        console.error(
          "Unable to create order:",
          error.response?.data || error.message
        );

        alert("Unable to create your order. Please try again.");
      }
    } finally {
      setLoading(false);
    }
  };

  // Calculate total price
  const total = Object.values(buyitems).reduce(
    (sum, price) => sum + (Number(price) || 0),
    0
  );

  return (
    <section className={styles.bookDetailContainer}>
      {/* Breadcrumb */}
      <nav className={styles.breadcrumb} aria-label="Breadcrumb">
        <Link href="/">Home</Link>
        <span>/</span>
        <Link href="/publication">Publications</Link>
        <span>/</span>
        <span aria-current="page">My Planet My Playground</span>
      </nav>

      <div className={styles.bookMain}>
        {/* Book Image Gallery */}
        <div className={styles.bookImage}>
          <div className={styles.mainImage}>
            <span className={styles.imageBadge}>
              ADVENTURE & EXPLORATION
            </span>

            <Image
              src={imageChange}
              alt="My Planet My Playground by Arvinder Singh Bahal"
              width={700}
              height={700}
              priority
              sizes="(max-width: 768px) 90vw, 45vw"
              className={styles.featuredImage}
            />
          </div>

          <div
            className={styles.smallImage}
            aria-label="Book image gallery"
          >
            {images.map((item, index) => (
              <button
                type="button"
                key={item}
                className={`${styles.thumbnail} ${
                  imageChange === item ? styles.activeThumbnail : ""
                }`}
                onClick={() => setImageChange(item)}
                aria-label={`View book image ${index + 1}`}
                aria-pressed={imageChange === item}
              >
                <Image
                  src={item}
                  alt={`My Planet My Playground preview ${index + 1}`}
                  width={150}
                  height={150}
                  sizes="150px"
                />
              </button>
            ))}
          </div>
        </div>

        {/* Book Information */}
        <div className={styles.bookInfo}>
          <span className={styles.productEyebrow}>
            A JOURNEY BEYOND THE ORDINARY
          </span>

          <h2 >MY PLANET MY PLAYGROUND</h2>

          <div>
            <span className={styles.authorLabel}>WRITTEN BY</span>

            <h3>
              Arvinder Singh Bahal <span>(Arvi)</span>
            </h3>
          </div>

          <p className={styles.authorDescription}>
            Explore an extraordinary life of adventure, breathtaking
            destinations, diverse cultures, and unforgettable experiences
            across the planet and beyond.
          </p>

          {/* Purchase Options */}
          <div className={styles.purchaseSection}>
            <div className={styles.purchaseHeading}>
              <div>
                <span className={styles.productEyebrow}>
                  YOUR EDITION
                </span>

                <h3>Choose Your Format</h3>
              </div>

              <span className={styles.currencyNote}>USD</span>
            </div>

            {/* Digital Edition */}
            <label
              className={`${styles.formatOption} ${
                buyitems.eBook ? styles.selectedFormat : ""
              }`}
            >
              <input
                type="checkbox"
                name="eBook"
                value="35.00"
                checked={Boolean(buyitems.eBook)}
                onChange={handleBuyItem}
              />

              <span className={styles.formatIcon}>
                <FontAwesomeIcon icon={faBookOpen} />
              </span>

              <span className={styles.formatDetails}>
                <strong>Digital Edition</strong>
                <small>E-book · PDF format</small>
              </span>

              <span className={styles.formatPrice}>$35.00</span>

              <span className={styles.formatCheck}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </label>

            {/* Hardcover Edition */}
            <label
              className={`${styles.formatOption} ${
                buyitems.hardcover ? styles.selectedFormat : ""
              }`}
            >
              <input
                type="checkbox"
                name="hardcover"
                value="100.00"
                checked={Boolean(buyitems.hardcover)}
                onChange={handleBuyItem}
              />

              <span className={styles.formatIcon}>
                <FontAwesomeIcon icon={faBookOpen} />
              </span>

              <span className={styles.formatDetails}>
                <strong>Hardcover Edition</strong>
                <small>Printed book</small>
              </span>

              <span className={styles.formatPrice}>$100.00</span>

              <span className={styles.formatCheck}>
                <FontAwesomeIcon icon={faCheck} />
              </span>
            </label>

            {/* Order Summary */}
            <div className={styles.orderSummary}>
              <span>Total</span>
              <strong>${total.toFixed(2)}</strong>
            </div>

            <button
              type="button"
              className={styles.buyButton}
              onClick={createOrder}
              disabled={loading}
            >
              {loading ? "Processing..." : "Continue to Checkout"}

              {!loading && <span aria-hidden="true">→</span>}
            </button>

            <p className={styles.secureNote}>
              <FontAwesomeIcon icon={faShieldHalved} />
              Secure checkout · Choose your preferred edition
            </p>
          </div>

          {/* Social Links */}
          <div className={styles.socialSection}>
            <span>CONNECT WITH THE AUTHOR</span>

            <div className={styles.socialLinks}>
              <a
                href="https://www.facebook.com/arvibahal"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <FontAwesomeIcon icon={faFacebook} />
              </a>

              <a
                href="https://www.linkedin.com/in/arvinder-bahal-24242519"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>

              <a
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>

              <button
                type="button"
                onClick={handleShare}
                aria-label="Share My Planet My Playground"
              >
                <FontAwesomeIcon icon={faShareNodes} />
              </button>
            </div>
          </div>

          {/* Contact */}
          <div className={styles.contactInfo}>
            Questions about the book?{" "}
            <Link href="mailto:arvibahal@gmail.com">
              Contact the author
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlaygroundDetail;
