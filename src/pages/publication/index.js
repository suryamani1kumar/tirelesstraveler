import React from "react";
import Image from "next/image";
import Link from "next/link";
import Head from "next/head";

const publications = [
  {
    id: 1,
    title: "MY PLANET MY PLAYGROUND",
    author: "Arvinder (Arvi) Singh Bahal",
    description:
      "Arvinder ‘Arvi’ Singh Bahal is an extraordinary explorer whose passion for adventure has taken him to some of the world’s most  remote and fascinating destinations.",
    image: "/images/MY_PLAYNET_MY_PLAYGROUND_COVER.jpg",
    link: "/publication/my-playnet-my-playground",
  },
  {
    id: 2,
    title: "THE TIRELESS TRAVELER",
    author: "Arvinder (Arvi) Singh Bahal",
    description:
      "Discover the extraordinary adventures of Arvi Bahal, an explorer whose remarkable journeys span continents, cultures, extreme landscapes, and even outer space.",
    image: "/images/ab-bahal-cover.webp",
    link: "/publication/the-tireless-traveler",
  },
];

const Publication = () => {
  return (
    <div className="pub-list-page">
      <Head>
        <title>Publications | The Tireless Traveler</title>
        <meta
          name="description"
          content="Explore extraordinary stories, remarkable journeys, and publications that inspire you to see the world differently."
        />
        <link
          rel="canonical"
          href="https://www.tirelesstraveler.net/publication"
        />
      </Head>

      <section className="pub-list-hero">
        <h1>Our Publications</h1>

        <p>
          Explore extraordinary stories, remarkable journeys, and publications
          that inspire you to see the world differently.
        </p>
      </section>

      <section className="pub-list-section">
        <div className="pub-list-section-heading">
          <h2>Discover Our Books</h2>

          <span className="pub-list-count">
            {publications.length} Publication
            {publications.length !== 1 ? "s" : ""}
          </span>
        </div>

        <div className="pub-list-grid">
          {publications.map((book) => (
            <article className="pub-list-card" key={book.id}>
              <Link href={book.link} style={{ textDecoration: "none" }}>
                <div className="pub-list-cover">
                  <Image
                    src={book.image}
                    alt={book.title}
                    fill
                    sizes="(max-width: 600px) 90vw, (max-width: 900px) 45vw, 300px"
                    className="pub-list-cover-image"
                  />
                </div>

                <div className="pub-list-details">
                  <h3>{book.title}</h3>

                  <p className="pub-list-author">By {book.author}</p>

                  <p className="pub-list-description">{book.description}</p>

                  <div className="pub-list-card-footer">
                    <span className="pub-list-view-button">
                      Explore Book
                      <span aria-hidden="true"> ↗</span>
                    </span>
                  </div>
                </div>
              </Link>
            </article>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Publication;
