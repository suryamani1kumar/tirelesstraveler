import React, { useState } from "react";
import styles from "./book.module.scss";
import Link from "next/link";
import { Tabs, Tab } from "react-bootstrap";
import Image from "next/image";

const BookDetail = () => {
  const [key, setKey] = useState("description");

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
          <h2>
            Comprehensive Guide to Insolvency and Bankruptcy Code, 2016 (Law and
            Practice)
          </h2>
          <p className={styles.edition}>
            Fourth edition (set of 2 volumes), Volume 1
          </p>

          <p>
            <strong>Author(s):</strong> <a href="#">Ayush J. Rajani</a>,{" "}
            <a href="#">Khushboo Rajani</a>, <a href="#">Alka Adatia</a>
          </p>
          <p>
            <strong>Published by:</strong> Bloomsbury Publishing India Pvt. Ltd
          </p>
          <p>
            <strong>Publication Date:</strong> 10 June, 2024{" "}
            <span className={styles.available}>Available in all formats</span>
          </p>
          <p>
            <strong>ISBN:</strong> 9789356408357 <strong>Pages:</strong> 988
          </p>

          <div className={styles.ebookOptions}>
            <button className={styles.activeTab}>EBOOK (EPUB)</button>
            <button>EBOOK (PDF)</button>
          </div>

          <div className={styles.priceInfo}>
            <p>
              <strong>ISBN:</strong> 9789356408357 <strong>Price:</strong> INR
              3825.00
            </p>
            <div className={styles.buttons}>
              <button>Add to cart</button>
              <button>Buy Now</button>
            </div>
          </div>
        </div>
      </div>

      <Tabs
        id="book-tabs"
        activeKey={key}
        onSelect={(k) => setKey(k)}
        className="mb-3"
        fill
      >
        <Tab eventKey="description" title="Description">
          <div className="p-3">
            <p className="para">
              This book is written with the objective of making the GST auditor
              fully aware not only about the process and procedure of GST audits
              but also about the utmost importance of adopting a fair,
              transparent and impartial way of conducting the audit.
            </p>
            <p className="para">
              A basic knowledge of accounts is a pre-requisite for any auditor
              and more so for departmental auditors who have diverse academic
              backgrounds; so a separate chapter on accounting has been written
              not only to acquaint them with elementary accounting process but
              also to provide further authentic sources for those interested in
              enhancing their accounting skills. Also provided are some case
              studies on business transactions having audit implications.
            </p>
            <p className="para">
              The emergent concepts of thematic audit and multi-locational
              co-audit have been included and fully explained.
            </p>
            <p className="para">
              <b>Highlights</b>
            </p>
            <ul>
              <li>
                Importance of Audit and Audit procedures under GST has been
                explained systematically
              </li>
              <li>
                The methods of comprehensive analysis of monthly, quarterly and
                annual returns have been explained in detail
              </li>
              <li>
                The relevance of the Thematic Audit and Multi-locational
                Co-Audit has been brought to the fore
              </li>
              <li>Guidelines for GST Auditors to conduct meaningful audits</li>
              <li>
                Nuances of relevant Accounting concepts and processes explained
                in a very lucid manner
              </li>
              <li>
                FAQs for better understanding of the transactions while
                conducting audit.
              </li>
            </ul>
          </div>
        </Tab>

        <Tab eventKey="toc" title="Table of contents">
          <div className="p-3">
            {/* Same content as description - can be different */}
            <p className="para">Same content as Description tab for now.</p>
          </div>
        </Tab>

        <Tab eventKey="visual" title="Visual">
          <div className="p-3">This is the Visual</div>
        </Tab>

        <Tab eventKey="update" title="Update Book">
          <div className="p-3">
            {/* Repeated description again */}
            <p className="para">
              Same description again. You can extract and reuse it via a
              component if needed.
            </p>
          </div>
        </Tab>

        <Tab eventKey="review" title="User Reviews">
          <div className="p-3">
            <textarea
              className="form-control"
              placeholder="Write your review..."
            />
          </div>
        </Tab>

        <Tab eventKey="chat" title="Author Chat">
          <div className="p-3">This is the User Reviews section.</div>
        </Tab>
      </Tabs>
    </div>
  );
};

export default BookDetail;
