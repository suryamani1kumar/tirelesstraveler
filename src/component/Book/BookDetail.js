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
import { useRouter } from "next/router";
import axios from "axios";
import { Context } from "../context";

const img = [
  "/images/book-box-cover.webp",
  "/images/ab-bahal-cover.webp",
  "/images/book_inside.webp",
  "/images/book_inside_1.webp",
];


const handleShare = async () => {
  if (navigator.share) {
    try {
      await navigator.share({
        title: `Explore Arvi’s journey, a photographer and future astronaut, through captivating visuals and stories.`,
        text: `Explore Arvi’s journey, a photographer and future astronaut, through captivating visuals and stories.`,
        url: "https://www.tirelesstraveler.net/publication",
      });
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

const BookDetail = () => {
  const router = useRouter();
  const [imageChange, setImageChnage] = useState("/images/book-box-cover.webp");
  const [buyitems, setBuyItems] = useState({ eBook: "35.00", hardcover: "" });
  const { setOpenSignInModal } = useContext(Context)

  const handleBuyitem = (e) => {
    const { name, value, checked } = e.target;
    setBuyItems((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleBuy = async () => {
    try {
      const res = await axios.get(
        `${process.env.NEXT_PUBLIC_API_URL}/customerAuth`,
        {
          withCredentials: true,
        }
      );
      if (res.status === 200) {
        router.push("/checkout");
      }
      console.log("res.data", res);
    } catch (err) {
      if (err.response) {
        if (err.response.status === 401) {
          setOpenSignInModal(true)
        } else {
          console.error("API error:", err.response.data || err.message);
        }
      } else {
        console.error("Unexpected error:", err.message);
      }
    }
  };

  return (
    <div className={styles.bookDetailContainer}>
      <nav className="breadcrumb">
        <Link href="/">Home</Link> / <span>THE TIRELESS TRAVELER</span>
      </nav>

      <div className={styles.bookMain}>
        <div className={styles.bookImage}>
          <div>
            <Image
              src={imageChange}
              alt={imageChange.replace("/images/", "")}
              width={0}
              height={250}
            />
          </div>
          <div className={styles.smallImage}>
            {img.map((item, i) => (
              <Image
                src={item}
                alt={item.replace("/images/", "")}
                width={40}
                height={40}
                key={i + 1}
                onMouseOver={() => setImageChnage(item)}
                onMouseLeave={() =>
                  setImageChnage("/images/book-box-cover.webp")
                }
              />
            ))}
          </div>
        </div>

        <div className={styles.bookInfo}>
          <h2>THE TIRELESS TRAVELER</h2>
          <p>
            <strong>Author(s):</strong> Arvinder Singh Bahal (Arvi)
          </p>
          <p>
            Email:{" "}
            <Link href={"mailto:arvibahal@gmail.com"}>arvibahal@gmail.com</Link>
          </p>
          <div style={{ display: "flex", gap: "10px", fontSize: "24px" }}>
            <a
              href="https://www.facebook.com/arvibahal"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faFacebook} />
            </a>
            <a
              href="https://www.linkedin.com/in/arvinder-bahal-24242519"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <button
              onClick={handleShare}
              style={{ fontSize: "14px", color: "#3585da" }}
            >
              <i className="fa fa-share-alt"></i>
            </button>
          </div>

          <div className={styles.ebookOptions}>
            <div>
              <button>
                <input
                  type="checkbox"
                  id="EBOOK"
                  name="eBook"
                  value="35.00"
                  onChange={handleBuyitem}
                  checked={buyitems.eBook}
                />
                <label htmlFor="EBOOK" style={{ paddingLeft: "8px" }}>
                  EBOOK (PDF) $ 35.00
                </label>
              </button>
              <button>
                <input
                  type="checkbox"
                  id="Hardcover"
                  name="hardcover"
                  value="100.00"
                  onChange={handleBuyitem}
                  disabled
                />
                <label htmlFor="Hardcover" style={{ paddingLeft: "8px" }}>
                  Hardcover $ 100.00
                </label>
              </button>
            </div>

            <div>
              <button onClick={handleBuy}>Buy Now</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BookDetail;
